# Screenshot Guide for Lab Test 2 Submission

## Required Screenshots

Please take the following screenshots and save them in the `screenshots/` folder:

### 1. Main Application Screenshots

#### a) `ankara-weather.png`
- Show the app with Ankara, Turkey weather loaded
- Make sure all weather details are visible
- Capture the full page including header and footer

#### b) `search-feature.png`
- Show the search bar with a city being typed
- Demonstrate the search functionality

#### c) `weather-details.png`
- Close-up of the weather card showing all details
- Temperature, humidity, wind speed, pressure, visibility, cloudiness

#### d) `mobile-view.png`
- Resize browser to mobile size (375px width)
- Show responsive design working correctly

#### e) `error-handling.png`
- Type an invalid city name (e.g., "zzzzz")
- Capture the error message display

### 2. Postman API Screenshots

#### a) `postman-ankara.png`
- Open Postman
- Make a GET request to: `http://api.openweathermap.org/data/2.5/weather?q=Ankara,Turkey&appid=YOUR_API_KEY`
- Capture the full response with status code 200

#### b) `postman-response-structure.png`
- Show the JSON response structure
- Expand important fields like `main`, `weather`, `wind`, `sys`

### 3. GitHub Repository Screenshot

#### `github-repo.png`
- Show your GitHub repository page
- Make sure the repository name is visible: `101515982_comp3123_labtest2`
- Show the file structure

### 4. Deployment Screenshot (Vercel/Railway/Render)

#### `deployment-live.png`
- Show the deployed application URL
- Capture the live app working on the hosting platform

## Steps to Take Screenshots

1. **Start the application**:
   ```bash
   npm start
   ```

2. **Open browser** at http://localhost:3000

3. **Use browser DevTools** (F12):
   - For mobile view: Toggle device toolbar (Ctrl+Shift+M)
   - Set to iPhone or custom 375px width

4. **For Postman**:
   - Download from https://www.postman.com/downloads/
   - Create a new GET request
   - Use the OpenWeatherMap API endpoint

5. **Save all screenshots** in the `screenshots/` folder

## Creating the DOCX Submission File

1. Create a Word document named: `101515982_comp3123_labtest2_screenshots.docx`

2. **Structure the document**:
   ```
   Title Page:
   - Student Name
   - Student ID: 101515982
   - Course: COMP3123
   - Assignment: Lab Test 2
   - Date
   
   Section 1: Application Screenshots
   - Include all app screenshots with captions
   
   Section 2: Postman API Testing
   - Include Postman screenshots
   - Show request details and response
   
   Section 3: GitHub Repository
   - Include GitHub screenshot
   - Provide GitHub link: https://github.com/YOUR_USERNAME/101515982_comp3123_labtest2
   
   Section 4: Deployment
   - Include deployment screenshot
   - Provide live URL
   ```

3. Add descriptions for each screenshot explaining what it shows

4. Include your GitHub repository link at the top and bottom of the document

## Submission Checklist

- [ ] All screenshots taken and saved
- [ ] DOCX file created with all screenshots
- [ ] GitHub link included in DOCX
- [ ] Project ZIP created (without node_modules)
- [ ] Postman screenshots included
- [ ] Deployment URL included
- [ ] Screenshots are clear and readable

## Creating ZIP File

```bash
# Remove node_modules first
cd /Users/gozdeeski/Desktop/labTest2
rm -rf 101515982_comp3123_labtest2/node_modules

# Create ZIP
zip -r 101515982_comp3123_labtest2.zip 101515982_comp3123_labtest2

# Then reinstall dependencies if you want to continue working
cd 101515982_comp3123_labtest2
npm install
```

## Important Notes

- Do NOT include `node_modules` in the ZIP
- File size should be reasonable (< 50MB)
- Screenshots should be high quality but not too large
- Make sure API key is working before taking screenshots
- Test the deployed app before taking its screenshot

