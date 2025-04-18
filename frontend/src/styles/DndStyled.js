import styled from "styled-components";

export const DndStyled = styled.div`
  .resizerComp {
    position: absolute;
    cursor: move;
    
    &.is-editing {
      z-index: 9999;
    }
    
    .content-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px dashed transparent;
      pointer-events: none;
      
      &.active {
        border-color: #3498db;
      }
      
      .point {
        position: absolute;
        width: 8px;
        height: 8px;
        background: #fff;
        border: 1px solid #3498db;
        border-radius: 50%;
        pointer-events: all;
        
        &.top-left {
          top: -4px;
          left: -4px;
          cursor: nwse-resize;
        }
        
        &.top-right {
          top: -4px;
          right: -4px;
          cursor: nesw-resize;
        }
        
        &.bottom-left {
          bottom: -4px;
          left: -4px;
          cursor: nesw-resize;
        }
        
        &.bottom-right {
          bottom: -4px;
          right: -4px;
          cursor: nwse-resize;
        }
      }
      
      .delete-btn {
        position: absolute;
        top: -15px;
        right: -15px;
        width: 20px;
        height: 20px;
        background: #e74c3c;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        pointer-events: all;
        color: white;
        font-size: 12px;
        
        &:hover {
          background: #c0392b;
        }
      }
    }
  }
  
  /* Custom resize handles */
  .resize-handle {
    position: absolute;
    pointer-events: all;
    
    &.top, &.bottom {
      height: 5px;
      left: 0;
      right: 0;
      cursor: ns-resize;
    }
    
    &.left, &.right {
      width: 5px;
      top: 0;
      bottom: 0;
      cursor: ew-resize;
    }
    
    &.top {
      top: -3px;
    }
    
    &.right {
      right: -3px;
    }
    
    &.bottom {
      bottom: -3px;
    }
    
    &.left {
      left: -3px;
    }
    
    &.top-left, &.top-right, &.bottom-left, &.bottom-right {
      width: 10px;
      height: 10px;
    }
    
    &.top-left {
      top: -5px;
      left: -5px;
      cursor: nwse-resize;
    }
    
    &.top-right {
      top: -5px;
      right: -5px;
      cursor: nesw-resize;
    }
    
    &.bottom-left {
      bottom: -5px;
      left: -5px;
      cursor: nesw-resize;
    }
    
    &.bottom-right {
      bottom: -5px;
      right: -5px;
      cursor: nwse-resize;
    }
  }
`;
