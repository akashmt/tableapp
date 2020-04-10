import React from 'react'
import styled from 'styled-components'
import GuideChimp from 'guidechimp';
import 'guidechimp/dist/guidechimp.min.css';
import { Hero, CardOne, CardTwo, CardThree } from './components'

export const Dashboard = () => {

  var tour = [
    {
        element: '#tour-chart',
        title: 'Tourapp Dashboard1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a bibendum quam. Nam lacinia maximus nisl id euismod. Praesent ac tincidunt purus.',
    },
    {
        element: '#tour-card1',
        title: 'Transactions',
        description: 'Transactions Mauris porttitor justo a condimentum dapibus. Quisque tincidunt blandit sem sed placerat. In pulvinar convallis ex, in pellentesque orci tincidunt vestibulum.',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ]
    },
    {
        element: '#tour-card2',
        title: 'Salary',
        description: 'Vestibulum sodales sed tellus quis imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ac ullamcorper eros',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ]
    },
    {
        element: '#tour-card3',
        title: 'Other Information',
        description: 'Aenean nec tempor tellus. Nunc quis porttitor eros, quis finibus justo.',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ]
    },
  ];

  var guideChimp = new GuideChimp(tour);

  function startTour() {
    guideChimp.start();
};


	return (
		<StyledDashboard className="Tourapp-dashboard">
			<Hero/>
			<CardOne/>
			<CardTwo/>
			<CardThree/>
      <button className="button" onClick={startTour}>Start Tour</button>
		</StyledDashboard>
	)
}

const StyledDashboard = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 3rem;
	grid-template-areas: 
		"dashboardhero dashboardhero dashboardhero"
		"dashboardcardone dashboardcardtwo dashboardcardthree";

	section.Dashboard-hero 				{ grid-area: dashboardhero; }
	section.Dashboard-cardone 		{ grid-area: dashboardcardone; }
	section.Dashboard-cardtwo 		{ grid-area: dashboardcardtwo; }
	section.Dashboard-cardthree 	{ grid-area: dashboardcardthree; }

`