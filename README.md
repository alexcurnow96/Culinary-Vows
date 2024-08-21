

# Culinary Vows


## Introduction

Culinary Vows is an interactive website that allows users to input their choices for a three-course dinner at a wedding. The site features image carousels with pop-out modals to show allergen information and dish descriptions. The user then chooses their option from a drop-down box and save their inputs ready to send it to their email to confirm. 

![Responsive Mockup](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/amiresponsive.png)

## Landing page 

This project utilises one main webpage, with an additional smaller page for the email confirmation to be sent. The landing page, therefore, includes the event information, image carousels, dropdown boxes, and inital email form. 

![Event Information](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/landingpage.png)

![Starter Carousel](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/startercarousel.png)

![Main Carousel](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/maincarousel.png)

![Dessert Carousel](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/dessertcarousel.png)

![Submit Form](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/submitform.png)

## Send Email page

This send email page features the user's choices (once saved on landing page) and a button to send it to the email listed. 

![Responsive Mockup](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/emailform.png)

## Design Choices

I started my project by planning on a Miro whiteboard. I created ideas, user stories, design choices, and wireframes on my board. 

The design started with the image carousels which would feature different dishes for each course. These would be highly colourful, with each dish image showing the vibrancy of the ingredients to make choices easier for users. Therefore, I made the decision to keep the background and all elements white. 

![Responsive Mockup](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/miroboard.png)

My wireframes were made on the Miro whiteboard using their shapes feature. This was my first design, featuring multiple pages with links to storage. 

I realised upon starting development that my project would require a back-end server to store the information from each webpage and show them on the final page. This was not within my current learning scope and so I simplified the website and included all the dropdown boxes, email input, and image carousels on one page. 

This made it easier for me to add the inputs into an array and place it into session storage to be brought back on the final page.

![Wireframes](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/wireframes.png)

## User Stories, features and bugs

User Stories
- As a user I want a clean and simple site to make my decision easier. 
- As a user I want to see all of my options in categories to make my decision easier.
- As a user I want to see allergy information to be able to make a wise choice.
- As a user I want my options to be stored, so I don't have to make the choices again.
- As an event planner I want a simple app to send to guests at my event.
- As a designer I want a design that is easy to replicate for multiple dishes and categories to help me develop the site. 

Features
- Clean and simple design with minimal branding colours.
- Clear links and buttons to pages.
- Event information listed clearly.
- Image carousels.
- Categories of images.
- Session storage.
- Creation and storage of an array.
- Modal with allergen information.


## Future Features

This project would benefit from having a back-end database, including key value pairs and storage for multiple users. 

This project would benefit from having a fully customisable design for multiple events, including text-areas and image-areas for an event planner to fill in and send to guests. 

In the next iteration, the submit button will not be available to click until the options have been saved into an array. This reduces user confusion and follows the process needed for the session storage to work. 


## Fixed Bugs / Issues

There was a bug with the modal on the carousel images. The modal would open upon clicking the corresponding image but would not close. Upon further investigation (with the help of our SME expert, Mark), we discovered it was event bubbling which was hindering the modal closing. 

The close button, upon clicking, would bubble back to the open click and reopen the modal. This was because the close div was nested inside of the open div. It was fixed through research and expert help. 


## Unfixed Bugs / Issues

There is only one modal working (Bruschetta on the starter carousel). Due to my current experience with JavaScript, I was unable to make more than one modal work on my page. The one modal is a good example of what the others will show, and the modal images are all featured in my assets/images folder. 


### Validator Testing

![HTML validation](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/htmlvalidation.png)

![Email HTML validation](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/emailhtmlvalidation.png)

![CSS validation](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/cssvalidation.png)

![Mobile Lighthouse](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/lighthousemobile.png)

![Desktop Lighthouse](https://github.com/alexcurnow96/Culinary-Vows/blob/main/assets/README/lighthousedesktop.png)


## Deployment

Site successfully deployed on  [https://alexcurnow96.github.io/Culinary-Vows/]

## Credits

### Content
- Yudiz Solutions Limited's Codepen 'Expandable Animated Card Slider' was used as a template for the image sliders. [Expandable Animated Card Slider (codepen.io)](https://codepen.io/yudizsolutions/pen/wvzrPoj)
- Inspiration was taken from Bedimcode's Youtube video 'Responsive Space Website Design Using HTML CSS And JavaScript'. [(2) Responsive Space Website Design Using HTML CSS And JavaScript - YouTube](https://www.youtube.com/watch?v=B8aTNKgbwE0&t=201s)
- Fonts were taken from Google Fonts. [Browse Fonts - Google Fonts](https://fonts.google.com/)
- The icon for the close button was taken from Font Awesome. [Font Awesome](https://fontawesome.com/)
- Perplexity AI was used for each dish description and the event information. [Perplexity](https://www.perplexity.ai/)
- Perplexity AI was also used for coding help to explain concepts in an easy to digest manner. [Perplexity](https://www.perplexity.ai/)
- W3Schools was used as an outside resource for the JavaScript elements. Listed here is the modal information. [https://www.w3schools.com/howto/howto_css_modal_images.asp](https://www.w3schools.com/howto/howto_css_modal_images.asp)


### Media
- Food images were made by Firefly Generative Image AI from Adobe. [Adobe Firefly](https://firefly.adobe.com/inspire/images?ff_channel=adobe_com&ff_campaign=ffly_homepage&ff_source=firefly_seo)
- The top image was taken from Pexels.com. Photo by Alem Sánchez. [https://www.pexels.com/photo/white-receipt-on-table-612790/](https://www.pexels.com/photo/white-receipt-on-table-612790/)

## Other General Project Advice

Thank you to my cohort for their support, our facilitator Amy for her constant kind words and for reaching out when I am in the zone. And to Mark, you are THE expert! Thank you for finding and fixing my bugs (and then telling me I solved it just to boost my ego).