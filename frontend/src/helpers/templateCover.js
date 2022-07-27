export const getTemplate = (id) => {
    const template = {

    background: {
        type: "Gradient",
        color1: "#cc2b5e",
        color2: "#753a88",
        direction: 105,

    },
    frame:{
       
       type:"None",
    },
    position:{
        x: 50,
        y:50,
        scale:0.8
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
  