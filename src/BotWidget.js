import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BotWidget = () => {
  const { botId } = useParams(); 

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://cdn.hmlbots.digitalcontact.cloud/webchat.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //     window.renderBotWidget(botId, {
  //       var_title: "var_value",
  //       layout: {}
  //     }, false, false);
  //   };

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, [botId]);

  return <div>Bot will render here!</div>;
};

export default BotWidget;
