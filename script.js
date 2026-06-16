const canvas = document.getElementById("progressChart");
const ctx = canvas.getContext("2d");

canvas.width = 260;
canvas.height = 160;

const x = 130;
const y = 140;
const radius = 80;
const line = 32;

// cria padrão rabiscado
const patternCanvas = document.createElement("canvas");
patternCanvas.width = 10;
patternCanvas.height = 10;

const pctx = patternCanvas.getContext("2d");
pctx.strokeStyle = "#8f9d96";
pctx.lineWidth = 4;

pctx.beginPath();
pctx.moveTo(-5, 15);
pctx.lineTo(16, -6);
pctx.stroke();

const riscado = ctx.createPattern(patternCanvas, "repeat");

// pending riscado
ctx.beginPath();
ctx.lineWidth = line;
ctx.lineCap = "round";
ctx.strokeStyle = riscado;
ctx.arc(x, y, radius, Math.PI * 1.67, Math.PI * 2.03);
ctx.stroke();

// verde escuro por baixo
ctx.beginPath();
ctx.lineWidth = line;
ctx.lineCap = "round";
ctx.strokeStyle = "#0d5a2f";
ctx.arc(x, y, radius, Math.PI * 1.38, Math.PI * 1.82);
ctx.stroke();

// verde claro por cima
ctx.beginPath();
ctx.lineWidth = line;
ctx.lineCap = "round";
ctx.strokeStyle = "#218755";
ctx.arc(x, y, radius, Math.PI, Math.PI * 1.55);
ctx.stroke();