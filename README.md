# Job-Board

# WORK.PL Job Portal

![alt text](doc/hero.png)

## Overview

WORK.PL is a web-based job portal that enables users to browse and apply for various job positions across different sectors. The platform provides specific portals for roles like Sales Manager and Project Manager, and supports location-based searches for job opportunities. The main goal is to streamline the job application process and make it easier for job seekers to find relevant positions.

## Features

- **Job Search**: Users can search for jobs by position, company, and location.
- **Job Listings**: Dedicated pages for specific job roles like Sales Manager, with additional filters for salary and job type.
- **Apply Online**: Job seekers can directly apply for the listed positions through an integrated application form.
- **Upload CV**: Users can upload their CVs to be considered for potential job openings.
- **Post Job Offers**: Employers can post job vacancies on the platform to find suitable candidates.

## Project Structure

The project is structured into several HTML pages linked to CSS for styling and JavaScript for interactive functionality:
- `main.html`: The main landing page that includes job search functionality.
- `salesManager.html`, `salesManagerPoznan.html`, `salesManager2.html`: Specific pages tailored for Sales Manager positions with custom filters and location-specific content.
- `projectManager.html`: A similar setup for Project Manager positions.

Each role-specific page features:
- Job benefits and detailed descriptions.
- Requirements and company overview.
- Application button to submit applications directly.

## How to Set Up and Run the Project

### Prerequisites

Ensure you have the following installed:
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A basic server setup (if running locally) such as XAMPP or simply use live server features in code editors like VS Code.

### Installation

```bash
# 1. Clone the repository or download the source code:
git clone git@github.com:Fesyss/Job-Board.git
# 2. Run it
```

### Running the Application
1. If using a local server like XAMPP:
- Move the project folder to your `htdocs` directory.
- Start the Apache server via the XAMPP control panel.
- Open a web browser and navigate to `http://localhost/workpl/main.html`.
2. If using VS Code Live Server:
- Open the project folder in VS Code.
- Right-click `main.html` and select `Open with Live Server`.
- The project will automatically be opened in your default browser.

## Contributing

We welcome contributions from the community. If you wish to contribute to the project, please fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b your-branch-name`.
3. Make changes and commit them: `git commit -am 'Add some feature'`.
4. Push to the original branch: `git push origin your-branch-name`.
5. Create the pull request.

Alternatively, feel free to open an issue if you encounter bugs or have suggestions for improvements.

## Support

For support, email `work.pl@cdv.pl`.

## License

This project is licensed under the terms of the MIT license.
