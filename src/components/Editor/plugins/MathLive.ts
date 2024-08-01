import { ButtonView, Command, Plugin } from "ckeditor5";
export default class MathLive extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("mathLive", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Math Live",
        icon: `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM11.03 17.66C11.32 17.95 11.32 18.43 11.03 18.72C10.88 18.87 10.69 18.94 10.5 18.94C10.31 18.94 10.12 18.87 9.97 18.72L8.25 17L6.53 18.72C6.38 18.86 6.19 18.94 6 18.94C5.81 18.94 5.62 18.87 5.47 18.72C5.18 18.43 5.18 17.95 5.47 17.66L7.19 15.94L5.47 14.22C5.18 13.93 5.18 13.45 5.47 13.16C5.76 12.87 6.24 12.87 6.53 13.16L8.25 14.88L9.97 13.16C10.26 12.87 10.74 12.87 11.03 13.16C11.32 13.45 11.32 13.93 11.03 14.22L9.31 15.94L11.03 17.66ZM10.5 8.81H6C5.59 8.81 5.25 8.47 5.25 8.06C5.25 7.65 5.59 7.31 6 7.31H10.5C10.91 7.31 11.25 7.65 11.25 8.06C11.25 8.47 10.91 8.81 10.5 8.81ZM18 18.56H13.5C13.09 18.56 12.75 18.22 12.75 17.81C12.75 17.4 13.09 17.06 13.5 17.06H18C18.41 17.06 18.75 17.4 18.75 17.81C18.75 18.22 18.41 18.56 18 18.56ZM18 14.81H13.5C13.09 14.81 12.75 14.47 12.75 14.06C12.75 13.65 13.09 13.31 13.5 13.31H18C18.41 13.31 18.75 13.65 18.75 14.06C18.75 14.47 18.41 14.81 18 14.81ZM18 8.81H16.52V10.31C16.52 10.72 16.18 11.06 15.77 11.06C15.36 11.06 15.02 10.72 15.02 10.31V8.81H13.5C13.09 8.81 12.75 8.47 12.75 8.06C12.75 7.65 13.09 7.31 13.5 7.31H15.02V5.81C15.02 5.4 15.36 5.06 15.77 5.06C16.18 5.06 16.52 5.4 16.52 5.81V7.31H18C18.41 7.31 18.75 7.65 18.75 8.06C18.75 8.47 18.41 8.81 18 8.81Z" fill="#292D32"/>
                </svg>`, // You can use an SVG icon or any other icon you prefer
        tooltip: true,
      });

      // Execute a callback function when the button is clicked
      view.on("execute", () => {
        editor.model.change((writer) => {
          const { handleMathLive } = editor.config.get("mathLive") as any;
          handleMathLive();
        });
      });

      return view;
    });
  }
}
