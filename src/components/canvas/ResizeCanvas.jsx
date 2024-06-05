function ResizeCanvas(canvas) {
  const { width, height } = canvas.parentElement.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return { width, height };
  }

  return null;
}

export default ResizeCanvas;
