**Example Servless Azure Application**
==================
This repository is a simple example of a Serverless Architecture using Azure, MongoDB, and two IoT Client Applications. All Servless Functions were implemented in JavaScript and published on Azure Functions (i.e. their Serverless Cloud) that responds to HTTP Triggers. The example IoT Reporting application was written in Angular JavaScript and is currently deployed on Azure [here](https://markiotapp.azurewebsites.net). All JavaScript code was developed on Microsoft Visual Studio Code. The example IoT Embedded application was written in Python and running on a Raspberry Pi 3 Model B with a SenseHAT board that was written as part of my [Cloud Workshop](https://github.com/markreha/cloudworkshop).

What is a Serverless Architecture?

<i>"Serverless architectures are application designs that incorporate third-party “Backend as a Service” (BaaS) services, and/or that include custom code run in managed, ephemeral containers on a “Functions as a Service” (FaaS) platform. By using these ideas, and related ones like single-page applications, such architectures remove much of the need for a traditional always-on server component. Serverless architectures may benefit from significantly reduced operational cost, complexity, and engineering lead time, at a cost of increased reliance on vendor dependencies and comparatively immature supporting services."</i>
| -----------:|
| Martin Fowler 2018

A great article on this Architecture Style can be found [here](https://martinfowler.com/articles/serverless.html).

The following is a logical architecture diagram of the example in this repository (along with all of the source code):

<p align="center">
	<img src="https://github.com/markreha/playserverless/blob/main/Doc/Azure%20Serverless%20Example.jpg" alt="Example Serverless Architecture"/>
</p>

