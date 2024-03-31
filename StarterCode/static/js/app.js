// Use D3 library to read in samples.json
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"


function init() {
    // Dropdown menu selector
    let dropdownMenu = d3.select('#selDataset');

    // Fetch data for the dropdown
    d3.json(url).then((data) => {
        let sampleNames = data.names;
    
        // Populate the sample list in the dropdown
        sampleNames.forEach((sample) => {
            // console.log(sample)
            dropdownMenu.append('option').text(sample).property('value',sample);
        });

        // Initialize with the first sample
        let initialSample = sampleNames[0];
        optionChanged(initialSample)
    });
}

function optionChanged(newSample) {
        updateBarChart(newSample);
        updateBubbleChart(newSample);
        updateMetaData(newSample);
}

function updateBarChart(sample) {
    // Date retrieval
    d3.json(url).then((data) => {
        let samplesData = data.samples;

        // Filter by sample ID 
        let sampleFilter = samplesData.filter((sampleObj) => sampleObj.id == sample);
        let sampleResult = sampleFilter[0];

        let otuIDs = sampleResult.otu_ids;
        let otuLabels = sampleResult.otu_labels;
        let sampleValues = sampleResult.sample_values;

        // Create trace and plot for bar chart
        let trace = [{
            x: sampleValues.slice(0, 10).reverse(),
            y: otuIDs.slice(0, 10).reverse().map((id) => `OTU ${id}`),
            text: otuLabels.slice(0, 10),
            type:'bar',
            orientation: 'h'
        }];
        Plotly.newPlot('bar', trace);
        console.log('${sample} bar chart loaded');
    
    });
}

function updateBubbleChart(sample) {
    // Date retrieval
    d3.json(url).then((data) => {
        let samplesData = data.samples;

        // Filter by sample ID 
        let sampleFilter = samplesData.filter((sampleObj) => sampleObj.id == sample);
        let sampleResult = sampleFilter[0];

        let otuIDs = sampleResult.otu_ids;
        let otuLabels = sampleResult.otu_labels;
        let sampleValues = sampleResult.sample_values;

        // Create trace and layout for bubble chart
        let trace = [{
            x: otuIDs,
            y: sampleValues,
            text: otuLabels,
            mode: "markers",
            marker: {
                size: sampleValues,
                color: otuIDs,
                colorscale: 'Earth',
            }
        }];

        // define the layout for the bubble chart
        let layout = {
            xaxis: {title: 'OTU ID'}
        };

        // Plot the bubble chart with defined trace and layout
        Plotly.newPlot('bubble', trace, layout);
        console.log('${sample} bubble chart loaded');
    });
}

function updateMetaData(sample) {
    // Date retrieval
    d3.json(url).then((data) => {
        let samplesData = data.metadata;
        console.log(samplesData)
        // Filter by sample ID 
        let sampleFilter = samplesData.filter((sampleObj) => sampleObj.id == sample);
        let sampleResult = sampleFilter[0];

        let demographic_info = d3.select('#sample-metadata');

        d3.selectAll('#sample-metadata p').remove()
        
        for (let result in sampleResult){
            demographic_info.insert('p').text(`${result}: ${sampleResult[result]}`);
        }
    });
        
}

// Initialize the page
init()



