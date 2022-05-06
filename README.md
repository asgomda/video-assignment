# VID-E-OH!- Assignment 4
### Project Name:
*CSI: NYU Abu Dhabi*


### Project Description: 
*what is the project, what is the overall concept and theme, and what kind of experience you were striving to create.*

We chose option 1 from the assignment prompt. Our project is about a mystery crime that happened on NYUAD campus and the viewers are following the investigation of solving this crime with a surprising ending. We wanted to create a mysterious, but fun and entertaining atmosphere for the audience to view the website during their leisurly time. We wanted the viewers to be immersed in the investigation so we combined videos and interactivity pages to engage the viewer in the investigation. The main character is the Detective, whom the viewer is aiding in the search for the culrpit. 
For the website, we wanted to have a distinct NYUAD feel, with sleek and modern design. 

### Process: 
*How did you go about implementing the concept.*

**1. Drafting the story**: We decided to choose option 1 from the prompt and make our main location the NYUAD campus.

**2. Writing the script and seperating the scenes for shooting:**
 
   <img width="534" alt="Screen Shot 2022-05-05 at 21 03 40" src="https://user-images.githubusercontent.com/98803920/166975474-2f6694c9-dc00-42c8-9bdf-77de084eb405.png">
   
Since our story is a classic "whodunit" type of story, our script first establishes the event (trophy going missing), introduces the main character (Detective), explores the suspects, and reveals the surpsising ending. We had to think about the interactivity we wanted to create from the very beginning in order for the video component and the website to go smoothly together. We intended to draw the audience in by allowing them to be the Detective's "assistant" and by allowing them to craft their own experience of the website/story. As for the scenes, we planned the majority of them out, but some of them were impormptu creations.

**3. Making a wireframe:**

<img width="500" alt="Wireframes" src="https://user-images.githubusercontent.com/98803920/166976167-a0ebf32f-3ce6-40c0-8355-aa6175436831.jpeg">

  Our wireframe is a simple multiple page website that showcases several parts of the video. In order for the interactivity and video to work together, we split the complete video into several parts: introduction, the interviews, and the ending. The user would be able to interact with two specific pages and craft their own experience.
  
**4. Filming and recording audio:**

  We booked the camera and all the equipment and shot the scenes in several days. While filming, we also were using the Zoom audio recorder. We ensured to follow all safety precautions and handle the equipment with care. We filmed several takes of the same scene and sometimes different angles for the scene to have more content to work with in post-production.
  
**5. Editing the video and audio:** We synced the audio and video using Adobe Premiere (We were able to do that because we used the clap technique that made it easier to align the audio and video). Special effects such as the email pop-up, the CCTV video and its pop-up were done in Adobe After Effects with occasional helps from Adobe Photoshop. Color grading and final scene editting were done in Davinci Resolve.

**6. Working on the website:**
  Our website consists of several pages. Since it is important for the video to be loaded, we added a pre-loader screen that uses CSS animation. Using the `<video>` tag, we imported the videos and used JavaScript to configure the play/pause button. The button uses CSS transition to change between play and pause. The "next" button uses CSS animation and is timed to appear when video ends via JavaScript. 
   For the page with interviews, we styled the videos using flexbox. We put an overlay div that appears on hover and explains who each suspect are. We used CSS transition and transform to style the overlay. In order to have a video open as a pop-up, we created a new class called "pop-up" that has the video tag with controls. Using JavaScript, we made is so that this pop-up open when the overlay is clicked. There is also a close button to exit the pop-up view. 

### Reflection/Evaluation: 
*This should bookend the initial concept and talk about whether your expectations and goals were met in the process of building the final working version.*
  We think that our project met our expectations and delivered on the concept we had in mind. We are satisfied with the quality of the video and the quality of editing. The website aligns with the theme of the story and we think it is easy for the user to navigate. 
  In terms of video production, we noticed that some shots could have been improved. For instance, in some shots we could have had more space between the top of the head of the person in the shot. Also we think that we could have had more variety in terms of shots, but it was our first experience filming, so we are still happy. 
  We are satisfied with the editing, but color correcting was a tough step to complete and we could have improved upon that.
  The main challenge we encountered is having large video files that would not be possible to upload to GitHub. This also affects the loading time and we used GitHub LFS. 
