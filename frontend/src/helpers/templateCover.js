export const getTemplate = (id) => {
    const template = {

    background: {
        type: "gradient",
        color1: "#ec008c",
        color2: "#fc6767",
        direction: 105,
    },
    frame:{
       type1:"MacOS",
       type2:"Chrome"
    },
    position:{
        x: 50,
        y:50
    },
    size:{
        width:125,
        height:368
    },
    icon:{
        name:"emoji",
        color: "#4A90E2",
        fontSize: 125,
    },
    borderRadius:{
        curveness:30
    }
    };
  
    return template;
  };
  