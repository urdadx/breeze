export const getTemplate = (id) => {
    const template = {

    background: {
        type: "Gradient",
        color1: "#cc2b5e",
        color2: "#753a88",
        direction: 105,

    },
    frame:{
       type: "MacOS",
    },
    position:{
        x: 0,
        y: -2,
        scale: 0.75     
    },
    size:{
        width: 100,
        height: 100
    },
    icon:{
        name:"emoji",
        color: "#4A90E2",
        fontSize: 125,
    },
    borderRadius:{
        curveness: 14.2
    },
    shadow:{
        offsetX: 6,
        offsetY: 10,
        blur: 15,
        opacity: 0.2,
        color: "#000"
    }
    };
  
    return template;
};
    
  

  