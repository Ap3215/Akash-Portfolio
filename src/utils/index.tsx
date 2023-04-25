export const combineClass = (...classes: any[]) => {
  return classes.flat().join(" ");
};

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
