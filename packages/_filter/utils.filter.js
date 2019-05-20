// 百度小程序 filter 貌似不支持  require 全部合到一起吧
function isArray(array) {
  return array && array.constructor === 'Array';
}

// objects
var REGEXP = /{|}|"/g;

function keys(obj) {
  return JSON.stringify(obj)
    .replace(REGEXP, '')
    .split(',')
    .map(function(item) {
      return item.split(':')[0];
    });
}

//  memoize
function isPrimitive(value) {
  var type = typeof value;
  return (
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'undefined' ||
    value === null
  );
}

// mock simple fn.call in wxs
function call(fn, args) {
  if (args.length === 2) {
    return fn(args[0], args[1]);
  }

  if (args.length === 1) {
    return fn(args[0]);
  }

  return fn();
}

function serializer(args) {
  if (args.length === 1 && isPrimitive(args[0])) {
    return args[0];
  }
  var obj = {};
  for (var i = 0; i < args.length; i++) {
    obj['key' + i] = args[i];
  }
  return JSON.stringify(obj);
}

function memoize(fn) {
  var cache = {};

  return function() {
    var key = serializer(arguments);
    console.log(key);
    if (cache[key] === undefined) {
      cache[key] = call(fn, arguments);
    }

    return cache[key];
  };
}

// bem

var PREFIX = 'van-';

function join(name, mods) {
  name = PREFIX + name;
  mods = mods.map(function(mod) {
    return name + '--' + mod;
  });
  mods.unshift(name);
  return mods.join(' ');
}

function traversing(mods, conf) {
  if (!conf) {
    return;
  }

  if (typeof conf === 'string' || typeof conf === 'number') {
    mods.push(conf);
  } else if ((conf) instanceof Array) {
    conf.forEach(function(item) {
      traversing(mods, item);
    });
  } else if (typeof conf === 'object') {
    keys(conf).forEach(function(key) {
      conf[key] && mods.push(key);
    });
  }
}

function bem(name, conf) {
  var mods = [];
  traversing(mods, conf);
  return join(name, mods);
}

//

function isSrc(url) {
  return url.indexOf('http') === 0 || url.indexOf('data:image') === 0 || url.indexOf('//') === 0;
}

const memBem = memoize(bem);

export default {
  bem: function(a, b) {
    return memBem(a, b);
  },
  isSrc: isSrc,
  // 百度小程序 模板 貌似不支持三目
  judge: function(cond, a, b) {
    return cond ? a : b;
  },
  // switch 太恐怖 n目
  judgeSwitch(a, b, c, d, e, f) {
    return ((a ? b : c) ? 'background-color: ' + (d ? e : f) : '');
  },
  // picker 方法
  isSimple(columns) {
    return (!!columns.length && !columns[0].values);
    // return columns.length && !columns[0].values;
  }
};
