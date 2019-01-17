import React, { Component } from 'react'

export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.initCanvas = this.initCanvas.bind(this)
    }
  initCanvas() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = '#7FFFD4';
      ctx.lineWidth = 3;
      ctx.shadowBlur = 5;
      ctx.shadowColor = '#7FFFD4';

      var milliseconds = 0;
      var minutes = 0;
      var hour = 0;
      var date = "";
      var ctxBack = canvas.getContext("2d");
      var numBack = canvas.getContext("2d");
      //Number	
      ctxBack.lineWidth = 1;
      ctxBack.shadowBlur = 0;
      ctxBack.shadowColor = '#F0F8FF';

      function pageInit() {
          showTime();
          showBack();
          drawSecPin();
          drawMinPin();
          drawHouPin();
          setPoint();
          setNum();
      }

      function setNum() {
          numBack.save();
          numBack.translate(150, 150);
          numBack.beginPath();
          numBack.fillStyle = '#7FFFD4';
          numBack.font = "12px Helvetica";
          for (var i = 0; i < 60; i++) {
              if (i % 5 === 0) {
                  numBack.lineWidth = 5;
                  var xPoint = Math.sin(i * 6 * 2 * Math.PI / 360) * 100;
                  var yPoint = -Math.cos(i * 6 * 2 * Math.PI / 360) * 100;
                  numBack.fillText(i === 0 ? 12 : i / 5,
                      i === 0 ? -15 : xPoint - 10, i === 0 ? -185 : i <= 30 ? yPoint + 5 : yPoint + 10);
              }
          }
          numBack.stroke();
          numBack.closePath();
          numBack.restore();
      }



      // 绘制秒针
      function drawSecPin() {
          ctxBack.save();
          ctxBack.translate(150, 150);
          ctxBack.rotate(milliseconds / 60 * 2 * Math.PI);
          ctxBack.beginPath();
          ctxBack.strokeStyle = '#AFEEEE';
          ctxBack.lineWidth = 1;
          ctxBack.lineJoin = "bevel";
          ctxBack.miterLimit = 5;
          ctxBack.moveTo(0, 15);
          ctxBack.lineTo(3, -87.25);
          ctxBack.lineTo(7, -82.25);
          ctxBack.lineTo(0, -130);
          ctxBack.lineTo(-7, -82.25);
          ctxBack.lineTo(-3, -87.25);
          ctxBack.lineTo(0, 15);
          ctxBack.stroke();
          ctxBack.closePath();
          ctxBack.restore();
      }

      // 绘制分针
      function drawMinPin() {
          ctxBack.save();
          ctxBack.translate(150, 150);
          ctxBack.rotate(minutes * 6 * Math.PI / 180);
          ctxBack.beginPath();
          ctxBack.strokeStyle = '#20B2AA';
          ctxBack.lineWidth = 1;
          ctxBack.lineJoin = "bevel";
          ctxBack.miterLimit = 10;

          ctxBack.moveTo(0, 10);
          ctxBack.lineTo(3, -72.5);
          ctxBack.lineTo(7, -67.25);
          ctxBack.lineTo(0, -110);
          ctxBack.lineTo(-7, -67.25);
          ctxBack.lineTo(-3, -72.5);
          ctxBack.lineTo(0, 10);
          ctxBack.stroke();
          ctxBack.closePath();
          ctxBack.restore();

      }

      // 绘制时针
      function drawHouPin() {

          ctxBack.save();
          ctxBack.translate(150, 150);
          ctxBack.rotate(hour * 30 * Math.PI / 180);
          ctxBack.beginPath();
          ctxBack.strokeStyle = '#87CEFA';
          ctxBack.lineWidth = 1;
          ctxBack.lineJoin = "bevel";
          ctxBack.miterLimit = 10;

          ctxBack.moveTo(0, 5);
          ctxBack.lineTo(3, -55);
          ctxBack.lineTo(7, -50);
          ctxBack.lineTo(0, -95);
          ctxBack.lineTo(-7, -50);
          ctxBack.lineTo(-3, -55);
          ctxBack.lineTo(0, 5);
          ctxBack.stroke();
          ctxBack.closePath();
          ctxBack.restore();

      }
      //中间原点
      function setPoint() {
          ctxBack.beginPath();
          ctxBack.fillStyle = 'black';
          ctxBack.arc(150, 150, 3, 0, 2 * Math.PI);
          ctxBack.stroke();
      }


      function showBack() {
          for (var i = 0; i < 60; i++) {
              ctxBack.save();
              ctxBack.translate(150, 150);
              ctxBack.rotate(i / 60 * 2 * Math.PI);
              ctxBack.beginPath();
              ctxBack.strokeStyle = '#7FFFD4';
              ctxBack.moveTo(0, -150);
              ctxBack.lineWidth = i % 5 === 0 ? 5 : 2;
              ctxBack.lineTo(0, -130);
              ctxBack.stroke();
              ctxBack.closePath();
              ctxBack.restore();
          }
          ctxBack.beginPath();
          ctxBack.arc(150, 150, 130, 0, 2 * Math.PI);
          ctxBack.stroke();
      }

      function degToRad(degree) {
          var result;
          var factor = Math.PI / 180;
          if (degree === 0) {
              result = 270 * factor;
          } else {
              result = degree * factor;
          }
          return result;
      }

      function showTime() {

          var now = new Date();
          var today = now.toLocaleDateString();
          var time = now.toLocaleTimeString();
          var day = now.getDay();
          var hrs = now.getHours();
          var min = now.getMinutes();
          var sec = now.getSeconds();
          var mil = now.getMilliseconds();
          var smoothsec = sec + (mil / 1000);

          var smoothmin = min + (smoothsec / 60);
          var hours = hrs + (smoothmin / 60);

          milliseconds = smoothsec;
          minutes = smoothmin;
          hour = hours;

          switch (day) {
              case 1: date = '一'
                  break;
              case 2: date = '二'
                  break;
              case 3: date = '三'
                  break;
              case 4: date = '四'
                  break;
              case 5: date = '五'
                  break;
              case 6: date = '六'
                  break;
              case 0: date = '日'
                  break;
          }

          //Background
          var gradient = ctx.createRadialGradient(150, 150, 5, 150, 150, 100);
          gradient.addColorStop(0, "#03303a");
          gradient.addColorStop(1, "black");
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, 300, 300);

          //Hours
          ctx.beginPath();
          ctx.strokeStyle = '#87CEFA';
          ctx.arc(150, 150, 115, degToRad(0), degToRad((hours * 30) - 90));
          ctx.stroke();
          //Minutes
          ctx.beginPath();
          ctx.strokeStyle = '#20B2AA';
          ctx.arc(150, 150, 120, degToRad(0), degToRad(smoothmin * 6 - 90));
          ctx.stroke();
          //Seconds
          ctx.beginPath();
          ctx.strokeStyle = '#AFEEEE';
          ctx.arc(150, 150, 125, degToRad(0), degToRad(smoothsec * 6 - 90));
          ctx.stroke();
          //Date
          ctx.font = "25px Helvetica Bold";
          ctx.fillStyle = '#7FFFD4';
          ctx.fillText(today + "/星期" + date,75, 130);
          //Time
          ctx.font = "23px Helvetica Bold";
          ctx.fillStyle = '#7FFFD4';
          //ctx.fillText(time+":"+mil, 160, 280);
          ctx.fillText(time, 110, 180);
      }
      setInterval(pageInit, 50);
  }
    componentDidMount() {
        this.initCanvas()
    }
    componentDidUpdate() {
        this.initCanvas()
    }
    static defaultProps = {
        canvaswidth: 300,// 画布宽度
        canvasheight: 300,// 画布高度
        x0: 80,
        y0: 80,
        r: 72,
        lineWidth: 8,
        strokeStyle: 'rgba(248, 248, 248, 1)',
        LinearGradientColor1: '#3EECED',
        LinearGradientColor2: '#499BE6'
    }
  render() {
      const {canvaswidth, canvasheight } = this.props
    return (
        <div style={{ width: '1000px', height: '300px', position: 'relative', margin:' 0 auto'}}>
              <canvas id="canvas" width={canvaswidth} height={canvasheight}></canvas>
          </div>
    )
  }
}
