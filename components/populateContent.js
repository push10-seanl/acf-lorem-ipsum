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
  let oEmbedFields = layout.querySelectorAll(".acf-oembed");
  let wysiwygFields = layout.querySelectorAll(".acf-field-wysiwyg");

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

    //TOOD: relationship field
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

  //auto-populate oEmbed fields
  oEmbedFields.forEach((field) => {
    field.classList.add("has-value");
    let inputSearch = field.querySelector("input[type='text'].input-search");
    let inputValue = field.querySelector("input[type='hidden'].input-value");
    inputSearch.value = "https://www.youtube.com/watch?v=ScMzIvxBSi4";
    inputValue.value = "https://www.youtube.com/watch?v=ScMzIvxBSi4";
  });

  //auto-populate wysiwyg fields
  wysiwygFields.forEach((field) => {
    console.log("each wysiwyg wrapper");
    let iframe = field.querySelector("iframe");
    if (iframe) {
      console.log(iframe);
      // Ensure the iframe is fully loaded
      iframe.onload = function () {
        let iframeDocument =
          iframe.contentDocument || iframe.contentWindow.document;
        let iframeBody = iframeDocument.body;
        iframeBody.innerHTML =
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed interdum purus. Vivamus eu ligula vel lacus aliquam egestas. In lacus mauris, lacinia ut lacinia ac, blandit vel elit. Ut non magna erat. Nullam gravida malesuada rutrum. Duis sed ultrices lacus, non bibendum odio. Curabitur luctus velit ut augue cursus, et molestie.</p>";
      };

      // If the iframe is already loaded
      if (iframe.contentDocument || iframe.contentWindow.document) {
        let iframeDocument =
          iframe.contentDocument || iframe.contentWindow.document;
        let iframeBody = iframeDocument.body;
        iframeBody.innerHTML =
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed interdum purus. Vivamus eu ligula vel lacus aliquam egestas. In lacus mauris, lacinia ut lacinia ac, blandit vel elit. Ut non magna erat. Nullam gravida malesuada rutrum. Duis sed ultrices lacus, non bibendum odio. Curabitur luctus velit ut augue cursus, et molestie.</p>";
      }
    }
  });
}
