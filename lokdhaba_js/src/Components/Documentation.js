import React, { Component } from 'react';
import Pdf from '../Assets/Documents/TCPDLokDhabaCodebook.pdf';

export default class Documentation extends Component {
  render() {
    return (
      <div className="content overflow-auto">
        <div className="text-content">

          <h1>Documentation</h1>
          <p>Please refer to the <a href={Pdf} target="_blank">Lok Dhaba Codebook</a> to understand the fields in this
  dataset.</p>
          <h3>TCPD-IED: TCPD Indian Elections Dataset</h3>
          <p>If a variable(s) drawn from the TCDP-IED dataset plays an important role in your project (published or
  unpublished), please use all the suggested citations below: </p>
          <p><strong>Data:</strong> Saloni Bhogale, Sudheendra Hangal, Francesca Refsum Jensenius, Mohit Kumar, Chinmay Narayan,
            Basim U Nissa,
            and Gilles Verniers. 2019. “TCPD Indian Elections Data v1", Trivedi Centre for Political Data, Ashoka University.
</p>
          <p><strong>Codebook:</strong> Saloni Bhogale, Sudheendra Hangal, Francesca Refsum Jensenius, Mohit Kumar, Chinmay
            Narayan, Basim U
            Nissa, and Gilles Verniers. 2019. “TCPD Indian Election Data Codebook v1", Trivedi Centre for Political Data, Ashoka
  University.</p>
          <h3>TCPD-IID: TCPD Individual Incumbency Dataset</h3>
          <p>If a variable(s) drawn from the TCPD-IID dataset plays an important role in your project (published or
  unpublished), please use all the suggested citations below: </p>
          <p><strong>Data:</strong> Sudheendra Hangal, Mohit Kumar, Basim U Nissa and Gilles Verniers. 2019. "Individual
            Incumbency Dataset, 1962-current". Trivedi Centre for Political Data, Ashoka University.
</p>
          <p><strong>Visualization:</strong> Tikekar, Shivangi and Sudheendra Hangal. 2019. Incumbency Profile of Candidates in
            Indian General Elections. Trivedi Centre for Political Data, Ashoka University.
            https://lokdhaba.ashoka.edu.in/incumbency/GE.html
</p>
          <h3>Spatial Data</h3>
          <p><strong>Source:</strong> DataMeet Trust, Bangalore, India</p>
          <h3>Publications</h3>
          <p>Please notify us about any publications that result from the use of any of our datasets (TCDP-IED and TCPD-IID) by sending your bibliographic citation and information on your publication to tcpd-contact@ashoka.edu.in
</p>
          <p>If you are a news agency citing our data in your publication, kindly mention that the data was sourced from the Trivedi Centre for Political Data. You can also point to our website in your web articles: http://lokdhaba.ashoka.edu.in/ </p>

        </div>
      </div>
    )
  }
}
