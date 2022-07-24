export const getTemplate = (id) => {
    const template = {

    background: {
        type1: "Gradient",
        type2:"Solid",
        color1: "#FF00CC",
        color2: "#333399",
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
  