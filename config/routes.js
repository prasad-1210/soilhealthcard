module.exports.routes = {

  '/': {
    view: 'homepage',
    locals: {
     	layout: false
    }
  },
  '/jsonreader': {
    view: 'jsonreader',
    locals: {
     	layout: false
    }
  },
  'convert':{
    controller: "FileController",
    action: "convertToJson",
    locals: {
      layout: false
    }
  }
};
