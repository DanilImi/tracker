import path from "path";

const getHtml = async () => {
  try {
    const html = path.resolve(process.cwd(), "public", "index.html");
    return html;
  } catch (err) {
    console.error("Error getting html", err);
    return false;
  }
};

export { getHtml };
