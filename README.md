**belly-button-challenge**

**Background**
Build an interactive dashboard to explore the Belly Button Biodiversity dataset which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


1. Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    * Use _sample_values_ as the values for the bar chart.

    * Use _otu_ids_ as the labels for the bar chart.

    * Use _otu_labels_ as the hovertext for the chart.

3. Create a bubble chart that displays each sample.

    * Use _otu_ids_ for the x values.

    * Use _sample_values_ for the y values.

    * Use _sample_values_ for the marker size.

    * Use _otu_ids_ for the marker colors.

    * Use _otu_labels_ for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. 

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has   
   regular commits and a thorough README.md file,
