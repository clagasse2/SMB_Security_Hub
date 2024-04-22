def main():
    while True:  # Start an infinite loop
        # Ask for the tool name first
        tool_name = input("Enter the tool name (or type 'exit' to quit): ")
        
        # Check if the user wants to exit
        if tool_name.lower() == 'exit':
            break  # Exit the loop

        # Continue asking for other details if not exiting
        difficulty = input("Enter the difficulty level (easy/medium/hard): ")
        cis_controls = input("Enter the related CIS controls (e.g., 1.1, 1.2): ")
        description = input("Enter a short description for the tool: ")

        # Format the div content based on user input
        div_content = f'<div class="grid-item" data-control="{cis_controls}" data-difficulty="{difficulty}"><a href="Tools/{tool_name.replace(" ", "%20")}.html"><h3>{tool_name}</h3></a></div>\n'

        # Append to the toolsinfo.txt file
        with open("toolsinfo.txt", "a") as file:
            file.write(div_content)

        # Ensure the directory path is correct, considering your script's current working directory
        directory_path = 'Tools'  # Define the directory path
        filename = f"{tool_name.replace(' ', '_')}.html"  # Define the filename
        file_path = f"{directory_path}/{filename}"  # Combine directory path and filename

        # HTML content for the tool's page
        html_content = f'''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{tool_name}</title>
    <link rel="stylesheet" href="../navbar.css">
    <style>
    body {{
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        line-height: 1.6;
    }}

    .subheading {{
        font-size: 20px;
        margin-bottom: 10px;
    }}

    table {{
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }}

    th, td {{
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }}

    th {{
        background-color: #f2f2f2;
    }}
    </style>
</head>
<body>
    <div class="navbar">
        <div class="navbar-brand"><a href="index.html"><h2>SMB Security Hub</h2></a></div>
        <div class="nav-links">
            <a href="../Common Terms.html">Common Terms</a>
            <a href="../Laws & Regulations.html">Laws & Regulations</a>
            <a href="../Tools.html">Tools</a>
            <a href="../About.html">About</a>
        </div>
    </div>

<div class="header">
    <h1>{tool_name}</h1>
    <div class="separator"></div>
    <strong>This website provides general information about the tool</strong>
</div>

<table>
        <tr>
            <th>How to Implement</th>
            <td> </td>
        </tr>

        <tr>
            <th>CIS Controls Addressed</th>
            <td>
                {cis_controls}
            </td>
        </tr>
        <tr>
            <th>Link to the tool</th>
            <td></td>
        </tr>
 </table>

</body>
</html>
'''

        # Save the HTML content to a file in the specified directory
        with open(file_path, "w") as html_file:
            html_file.write(html_content)

        print(f"HTML page '{file_path}' created successfully.")

if __name__ == "__main__":
    main()
