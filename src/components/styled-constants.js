import styled from 'styled-components'

export const Backdrop = styled.div`
  
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  bottom: -50%;
  right: -15%;
  transform: translate(-50%, -50%);
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;

  & .modal-content {
    //width: 100%;
    //height: 100%;
    transform: translateY(100px);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  &.active {
    transition-duration: 250ms;
    transition-delay: 0ms;
    opacity: 1;

    & .modal-content {
      transform: translateY(0);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 350ms;
    }
  }
`;

export const Content = styled.div`
  
  overflow: auto; //scrollbar
  position: relative;
  width: fit-content;
  height: fit-content;
  top: 0;
  right: 0;
  bottom: 0;
  left: 150px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 80%;
  max-width: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 2px;
  font-size: 10px;
  
  div.gallery {
    margin-left: 20px;
    margin-bottom: 60px;
    border: 1px solid #ccc;
    float: left;
    width: 200px;
  }
  
  div.gallery:hover {
    border: 1px solid #777;
  }

  div.gallery img {
    width: 100%;
    height: 100px;
  }
  
  div.desc {
    font-size: 15px;
    padding: 15px;
    text-align: center;
  }
`;