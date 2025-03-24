import { randomImage } from "./image.js";

export async function populateContent(button) {
  console.log(button);
  let layout = button.parentElement;

  //automatically add rows whenever available
  const addRowButton = layout.querySelectorAll(".acf-repeater-add-row");

  addRowButton.forEach((button) => {
    let $i = 1;
    while ($i < 5) {
      button.click();
      $i++;
    }
  });

  let fields = layout.querySelectorAll(".acf-field");
  let imageFields = layout.querySelectorAll(".acf-image-uploader");
  let fileFields = layout.querySelectorAll(".acf-file-uploader");
  let linkFields = layout.querySelectorAll(".acf-link");

  fields.forEach((field) => {
    let input = field.querySelector("input[type='text']");
    //basic text input
    if (input) {
      input.value = "Lorem Ipsum Dolor Sit Amet";
    }
    //textarea
    let textarea = field.querySelector("textarea");
    if (textarea) {
      textarea.value =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed interdum purus. Vivamus eu ligula vel lacus aliquam egestas. In lacus mauris, lacinia ut lacinia ac, blandit vel elit. Ut non magna erat. Nullam gravida malesuada rutrum. Duis sed ultrices lacus, non bibendum odio. Curabitur luctus velit ut augue cursus, et molestie";
    }
    //
    // let select = field.querySelector("select");
    // if (select) {
    //   select.value = "test";
    // }

    //TOOD: oembed, image, file, relationship field,
  });

  linkFields.forEach((link) => {
    let title = link.querySelector("input[type='hidden'].input-title");
    let url = link.querySelector("input[type='hidden'].input-url");
    let target = link.querySelector("input[type='hidden'].input-target");
    var displayLink = link.querySelector(".link-node");
    title.value = "Learn More";
    url.value = "https://www.google.com";
    target.value = "_blank";
    link.parentElement.classList.add("has-value");
    link.classList.add("-value");

    displayLink.href = url.value;
  });

  //auto-populate image fields
  for (const field of imageFields) {
    let theField = field.querySelector("input[type='hidden']");
    let image = await randomImage();
    console.log(image);
    theField.value = image;
    field.parentElement.classList.add("has-value");
  }

  //auto-populate file fields, for videos
  for (const field of fileFields) {
    let theField = field.querySelector("input[type='hidden']");
    let image = await randomImage("video");
    console.log(image);
    theField.value = image;
    field.parentElement.classList.add("has-value");
  }
}
