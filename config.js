var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    accessToken: 'pk.eyJ1Ijoib21ja2Vhcm51dyIsImEiOiJjbTFqamRqeWcxMWF6MnJwc2RkdjBqdHoxIn0.E5gopEUreChvdj15aNY6_g',
    showMarkers: false, // 

    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Mapping the 2024 Presidential Election Through Swing States',
    byline: 'By Owen McKearn and Wilson Boudreaux',
    footer: 'Sources: Election Data: https://www.foxnews.com/elections/2024/general-results <br>Images: https://apnews.com/projects/election-results-2024/?office=P<br>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'OHChoro',
            alignment: 'left',
            hidden: false,
            title: '6:08 PM November 5th',
            image: 'images/OH.png',
            description: 'Ohio was the first swing state of election night to be called by the A.P., going to President Trump. <br><br>The state of Ohio has 18 electoral votes. In 2020 President Trump earned 53.27% of the vote, while President Biden earned 45.24%.',
            location: {
                center:[-83.62760, 39.78268],
                zoom: 7.13,
                pitch: 37.5,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: 1,
                    duration: 500
                },{
                    layer: 'circle-layer',
                    opacity: 0,
                    duration: 500
                },,{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'OHDot',
            alignment: 'left',
            hidden: false,
            title: '6:08 PM November 5th',
            image: 'images/OH.png',
            description: 'Ohio was the first swing state of election night to be called by the A.P., going to President Trump. <br><br>The state of Ohio has 18 electoral votes. In 2020 President Trump won with 53.27% of the vote, while President Biden earned 45.24%.',
            location: {
                center:[-83.81361, 40.16255],
                zoom: 6.90,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: .1,
                    duration: 500
                    
                },{
                    layer: 'circle-layer',
                    opacity: .6,
                    duration: 500
                },{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'NCChoro',
            alignment: 'left',
            hidden: false,
            title: '8:18 PM November 5th',
            image: 'images/NC.png',
            description: 'North Carolina was the second swing state of election night to be called by the A.P., going to President Trump. <br><br>The state of North Carolina has 15 electoral votes. In 2020 President Trump won with 49.93% of the vote, while President Biden earned 48.59%.',
            location: {
                center:[-80.44648, 35.76047],
                zoom: 6.7,
                pitch: 26.03,
                bearing: 10.31
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: 1,
                    duration: 500
                },{
                    layer: 'circle-layer',
                    opacity: 0,
                    duration: 500
                },,{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'NCDot',
            alignment: 'left',
            hidden: false,
            title: '8:18 PM November 5th',
            image: 'images/NC.png',
            description: 'North Carolina was the second swing state of election night to be called by the A.P., going to President Trump. <br><br>The state of North Carolina has 15 electoral votes. In 2020 President Trump won with 49.93% of the vote, while President Biden earned 48.59%.',
            location: {
                center:[-80.44648, 35.76047],
                zoom: 6.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: .1,
                    duration: 500
                    
                },{
                    layer: 'circle-layer',
                    opacity: .6,
                    duration: 500
                },{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'GAChoro',
            alignment: 'left',
            hidden: false,
            title: '8:18 PM November 5th',
            image: 'images/GA.png',
            description: 'Georgia was the third swing state of election night to be called by the A.P., going to President Trump. <br><br>The state of Georiga has 15 electoral votes. In 2020 President Biden won with 49.47% of the vote, while President Trump earned 49.24%.',
            location: {
                center:[-84.22479, 33.12017],
                zoom: 6.59,
                pitch: 23.50,
                bearing: 27.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: 1,
                    duration: 500
                },{
                    layer: 'circle-layer',
                    opacity: 0,
                    duration: 500
                },,{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'GADot',
            alignment: 'left',
            hidden: false,
            title: '9:58 PM November 5th',
            image: 'images/GA.png',
            description: 'Georgia was the third swing state of election night to be called by the A.P., going to President Trump. <br><br>The state of Georiga has 15 electoral votes. In 2020 President Biden won with 49.47% of the vote, while President Trump earned 49.24%.',
            location: {
                center:[-84.22479, 33.12017],
                zoom: 6.59,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: .1,
                    duration: 500
                    
                },{
                    layer: 'circle-layer',
                    opacity: .6,
                    duration: 500
                },{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 },
            ]
        },{
            id: 'PAChoro',
            alignment: 'left',
            hidden: false,
            title: '11:57 PM November 5th',
            image: 'images/PA.png',
            description: 'Pennsylvania was the fourth and final swing state of election night to be called by the A.P., going to President Trump. <br><br>The state of Pennsylania has 18 electoral votes. In 2020 President Biden won with 50.01% of the vote, while President Trump earned 48.84%.',
            location: {
                center:[-79.26382, 41.35844],
                zoom: 6.75,
                pitch: 36.5,
                bearing: 8.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: 1,
                    duration: 500
                },{
                    layer: 'circle-layer',
                    opacity: 0,
                    duration: 500
                },,{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'PADot',
            alignment: 'left',
            hidden: false,
            title: '11:57 PM November 5th',
            image: 'images/PA.png',
            description: 'Pennsylvania was the fourth and final swing state of election night to be called by the A.P., going to President Trump. <br><br>The state of Pennsylania has 18 electoral votes. In 2020 President Biden won with 50.01% of the vote, while President Trump earned 48.84%.',
            location: {
                center:[-79.26382, 41.35844],
                zoom: 6.75,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: .1,
                    duration: 500
                    
                },{
                    layer: 'circle-layer',
                    opacity: .6,
                    duration: 500
                },{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 },
            ]
        },{
            id: 'WIChoro',
            alignment: 'left',
            hidden: false,
            title: '2:34 AM November 6th',
            image: 'images/WI.png',
            description: 'Wisconsin was the first state to be called on November 6th by the A.P, going to President Trump. <br><br>The state of Wisconsin has 10 electoral votes. In 2020 President Biden won with 49.45% of the vote, while President Trump earned 48.82%.',
            location: {
                center:[-91.27099, 44.68339],
                zoom: 6.48,
                pitch: 27.48,
                bearing: 7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: 1,
                    duration: 500
                },{
                    layer: 'circle-layer',
                    opacity: 0,
                    duration: 500
                },,{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'WIDot',
            alignment: 'left',
            hidden: false,
            title: '2:34 AM November 6th',
            image: 'images/WI.png',
            description: 'Wisconsin was the first state to be called on November 6th by the A.P, going to President Trump. <br><br>The state of Wisconsin has 10 electoral votes. In 2020 President Biden won with 49.45% of the vote, while President Trump earned 48.82%.',
            location: {
                center:[-91.27099, 44.68339],
                zoom: 6.48,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: .1,
                    duration: 500
                    
                },{
                    layer: 'circle-layer',
                    opacity: .6,
                    duration: 500
                },{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 },
            ]
        },{
            id: 'MIChoro',
            alignment: 'left',
            hidden: false,
            title: '9:54 AM November 6th',
            image: 'images/MI.png',
            description: 'Michigan was the second state to be called on November 6th by the A.P, going to President Trump. <br><br>The state of Michigan has 16 electoral votes. In 2020 President Biden won with 50.62% of the vote, while President Trump earned 47.84%.',
            location: {
                center: [-86.88380, 43.84586],
                zoom: 6.48,
                pitch: 27.48,
                bearing: 7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: 1,
                    duration: 500
                },{
                    layer: 'circle-layer',
                    opacity: 0,
                    duration: 500
                },,{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'MIDot',
            alignment: 'left',
            hidden: false,
            title: '9:54 AM November 6th',
            image: 'images/MI.png',
            description: 'Michigan was the second state to be called on November 6th by the A.P, going to President Trump. <br><br>The state of Michigan has 16 electoral votes. In 2020 President Biden won with 50.62% of the vote, while President Trump earned 47.84%.',
            location: {
                center: [-86.88380, 43.84586],
                zoom: 6.48,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: .1,
                    duration: 500
                    
                },{
                    layer: 'circle-layer',
                    opacity: .6,
                    duration: 500
                },{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 },
            ]
        },{
            id: 'NVChoro',
            alignment: 'left',
            hidden: false,
            title: '9:15 PM November 8th',
            image: 'images/NV.png',
            description: 'Nevada was called on November 8th by the A.P, going to President Trump. <br><br>The state of Nevada has 6 electoral votes. In 2020 President Biden won with 50.06% of the vote, while President Trump earned 47.67%.',
            location: {
                center: [-120.11290, 39.28775],
                zoom: 5.95,
                pitch: 26.56,
                bearing: 10.39
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: 1,
                    duration: 500
                },{
                    layer: 'circle-layer',
                    opacity: 0,
                    duration: 500
                },,{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'NVDot',
            alignment: 'left',
            hidden: false,
            title: '9:15 PM November 8th',
            image: 'images/NV.png',
            description: 'Nevada was called on November 8th by the A.P, going to President Trump. <br><br>The state of Nevada has 6 electoral votes. In 2020 President Biden won with 50.06% of the vote, while President Trump earned 47.67%.',
            location: {
                center: [-120.11290, 39.28775],
                zoom: 5.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: .1,
                    duration: 500
                    
                },{
                    layer: 'circle-layer',
                    opacity: .6,
                    duration: 500
                },{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 },
            ]
        },{
            id: 'AZChoro',
            alignment: 'left',
            hidden: false,
            title: '6:21 PM November 9th',
            image: 'images/AZ.png',
            description: 'Arizona was called on November 9th by the A.P, going to President Trump. <br><br>The state of Arizona has 11 electoral votes. In 2020 President Biden won with 49.36% of the vote, while President Trump earned 49.06%.',
            location: {
                center: [-115.54440, 34.98976],
                zoom: 6.05,
                pitch: 22.56,
                bearing: 8.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: 1,
                    duration: 500
                },{
                    layer: 'circle-layer',
                    opacity: 0,
                    duration: 500
                },,{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 }
            ]
        },{
            id: 'AZDot',
            alignment: 'left',
            hidden: false,
            title: '6:21 PM November 9th',
            image: 'images/AZ.png',
            description: 'Arizona was called on November 9th by the A.P, going to President Trump. <br><br>The state of Arizona has 11 electoral votes. In 2020 President Biden won with 49.36% of the vote, while President Trump earned 49.06%.',
            location: {
                center: [-115.54440, 34.98976],
                zoom: 6.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'county_results',
                    opacity: .1,
                    duration: 500
                    
                },{
                    layer: 'circle-layer',
                    opacity: .60,
                    duration: 500
                },{
                    layer: 'national_results',
                    opacity: .25,
                    duration: 500
                }
            ],
            onChapterExit: [
                 {

                 },
            ]
        }
    ]
};
