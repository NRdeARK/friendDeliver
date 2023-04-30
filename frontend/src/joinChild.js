export default function (children, render, renderSeparator) {
  return children.reduce((result, child, index) => {
    if (index < children.length - 1) {
      return result.concat([
        render(child, index),
        renderSeparator(index + "-separator"),
      ]);
    }

    return result.concat(render(child, index));
  }, []);
}
