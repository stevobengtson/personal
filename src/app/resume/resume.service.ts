import { Injectable } from '@angular/core';

export interface Experience {
  id?: number;
  companyName?: string;
  companyUrl?: {
      src?: string;
      title?: string;
  };
  position?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  skills?: string[];
}

export interface Skill {
  id?: number;
  name: string;
  url?: string;
  colour?: string;
}

@Injectable()
export class ResumeService {
  private experiences = [
    {
      id: 1,
      companyName: 'Genologics an Illumina Company',
      companyUrl: { src: 'http://www.illumina.com', title: 'illumina.com' },
      position: 'Senior Software Developer',
      startDate: 'September 2017',
      endDate: 'December 2017',
      summary: `At Genologics I was given the opportunity to build a new front end user interface into a workflow project.
 Using Angular 4 with Twitter Bootstrap I was able to quickly build up a friendly interface with strong unit testing.
 I had little knowledge in the Angular 2+ framework, but was able to quickly get up to speed and contribute efficently.`,
      skills: [ 'Angular', 'Javascript', 'Bootstrap', 'HTML/CSS' ]
    },
    {
      id: 2,
      companyName: 'Varsity Tutors',
      companyUrl: { src: 'http://www.varsitytutors.com', title: 'varsitytutors.com' },
      position: 'Senior Architect and Developer',
      startDate: 'November 2013',
      endDate: 'September 2017',
      summary: `While at VarsityTutors I was been able to help develop strong processes and be an integral part of a major piece of the
 company. I was the primary developer to build out the Online Tutoring Platform that involved several major pieces of technology, WebRTC,
 Peer 2 Peer communication channels, collaborative editing and drawing.`,
      skills: [ 'Ruby On Rails', 'Javascript', 'Bootstrap', 'HTML/CSS', 'WebRTC', 'Pusher', 'Paper.js' ]
    },
    {
      id: 3,
      companyName: 'TimeMoneyStuff Inc.',
      companyUrl: { src: 'http://www.timemoneystuff.com', title: 'timemoneystuff.com (Defunct)' },
      position: 'C.T.O. / Senior Software Developer',
      startDate: 'September 2013',
      endDate: 'November 2015',
      summary: `I had the privilege of working with a great group of entrepreneurs to build a new startup called TimeMoneyStuff.
 I was managing the technical requirements of the company to build out the website and mobile applications. We built the website
 application using PHP with the Symfony2 framework and a MySQL storage solution connected to the application through Doctrine.
 For front end work we used jQuery with HTML and CSS.`,
      skills: [ 'PHP', 'Symfony', 'Javascript', 'jQuery', 'HTML/CSS', 'Postgres', 'Bootstrap' ]
    },
    {
      id: 4,
      companyName: 'Shaw Communications',
      companyUrl: { src: 'http://www.shaw.ca', title: 'shaw.ca' },
      position: 'Software Developer',
      startDate: 'September 2013',
      endDate: 'November 2013',
      summary: `At shaw I was part of the satellite development team working on the DreamGallery system to port the same guide
 system that is currently on the cable box systems to the new satellite box systems. This involved using Javascript and SVG on
 a prototype base.`,
      skills: [ 'Javascript', 'Prototype', 'SVG' ]
    },
    {
      id: 5,
      companyName: 'RevenueWire Inc.',
      companyUrl: { src: 'http://www.revenuewire.com', title: 'revenuewire.com' },
      position: 'Software Developer (Contract)',
      startDate: 'March 2013',
      endDate: 'September 2013',
      summary: `Working with a team of developers to maintain and improve the web based applications. This involves working
 in the PHP language with the Zend framework, jQuery, Twitter Bootstrap, HTML and CSS for the front end and Propel and MySQL
 for the backend.`,
      skills: [ 'PHP', 'Zend', 'jQuery', 'Bootstrap', 'HTML/CSS', 'MySQL' ]
    },
    {
      id: 6,
      companyName: 'Place2Give',
      companyUrl: { src: 'http://www.place2give.com', title: 'place2give.com' },
      position: 'Techincal Lead',
      startDate: 'March 2013',
      endDate: 'August 2013',
      summary: `Technical Lead for the development of the Place2Give site and related applications. I was charged with making
 sure that we delivered a quality product using the best available technical resources we had.`,
      skills: [ 'ASP .NET', 'C#', 'Javascript', 'HTML/CSS', 'Microsoft SQL Server' ]
    },
    {
      id: 7,
      companyName: 'RevenueWire Inc.',
      companyUrl: { src: 'http://www.revenuewire.com', title: 'revenuewire.com' },
      position: 'Software Architect',
      startDate: 'October 2010',
      endDate: 'March 2013',
      summary: `At RevenueWire I put into place several procedures for better development. These include peer code reviews,
 continuous integration and proper sign offs for parties involved in projects. I also contributed as one of the main software
 developers. I worked with the team to progress the framework forward by designing the applications and core structure.`,
      skills: [ 'PHP', 'Zend', 'Propel', 'MySQL', 'HTML/CSS', 'Javascript', 'jQuery', 'Bootstrap' ]
    },
    {
      id: 8,
      companyName: 'Silicon Sisters Interactive Inc.',
      companyUrl: { src: 'http://siliconsisters.ca', title: 'siliconsisters.ca (Defunct)' },
      position: 'Mobile Software Developer (Contract)',
      startDate: 'May 2012',
      endDate: 'August 2012',
      summary: `With Silicon Sisters I had the opportunity to work on a Mobile application initially using the Phone-gap platform
 but then migrating to a native iOS application.`,
      skills: [ 'OpenGAP', 'Objective C' ]
    },
    {
      id: 9,
      companyName: 'iDus Controls Ltd.',
      companyUrl: { src: 'http://www.iduscontrols.com', title: 'iduscontrols.com' },
      position: 'Software Developer (Contract)',
      startDate: 'May 2012',
      endDate: 'June 2012',
      summary: `I had the opportunity to help build a data collection website using a combination of tools including Zend, PHP, MySQL,
 Twitter-bootstrap, jQuery and HTML.`,
      skills: [ 'Zend', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'HTML/CSS' ]
    },
    {
      id: 10,
      companyName: 'Skyfire Labs',
      companyUrl: { src: '', title: '' },
      position: 'Javascript Developer',
      startDate: 'June 2010',
      endDate: 'October 2010',
      summary: `Mozilla developer for the backend servers of the Skyfire mobile browser solution. Worked on extensions and modifications
 for the Firefox web browser used for content detection.`,
      skills: [ 'Javascript' ]
    },
    {
      id: 11,
      companyName: 'Pioneers of the Inevitable (Songbird)',
      companyUrl: { src: 'http://getsongbird.net', title: 'getsongbird.net (Defunct)' },
      position: 'Software Developer',
      startDate: 'August 2007',
      endDate: 'June 2010',
      summary: `Worked with a team of Mozilla developers to build a Media Player on the Mozilla toolkit.`,
      skills: [ 'Javascript', 'XUL', 'XBL', 'C++' ]
    },
    {
      id: 12,
      companyName: 'Flock Software Inc.',
      companyUrl: { src: 'http://flock.com', title: 'flock.com (Defunct)' },
      position: 'Software Developer',
      startDate: 'September 2006',
      endDate: 'August 2007',
      summary: `As a developer for the Flock project I worked with the Mozilla toolkit to develop a Social Web Browser.`,
      skills: [ 'Javascript', 'XUL', 'XBL', 'C++' ]
    },
    {
      id: 13,
      companyName: 'Mercurial Communications Inc.',
      companyUrl: { src: 'http://www.mcomi.com', title: 'mcomi.com (Defunct)' },
      position: 'Software Developer',
      startDate: 'March 2005',
      endDate: 'August 2006',
      summary: `At Mercurial I was a software developer for various projects, the projects mostly focused around C++ application
 development on the Window platform.`,
      skills: [ 'C++', 'Javascript', 'XUL', 'XML', 'CSS', 'Win32' ]
    },
    {
      id: 14,
      companyName: 'IROC Systems Corp.',
      companyUrl: { src: '', title: '' },
      position: 'Software Developer, Project Leader',
      startDate: 'November 2001',
      endDate: 'March 2005',
      summary: `I was the Senior Developer and Project Manager for the S.M.A.R.T. application and all resources allocated to it.
 I was also the system administrator, office administrator, call centre manager, office network administrator, and project manager.`,
      skills: [ 'ASP .NET', 'Microsoft SQL Server', 'PHP', 'MySQL', 'Javascript', 'HTML/CSS' ]
    },
    {
      id: 15,
      companyName: 'Common Information Technology Infrastructure (BC Government)',
      companyUrl: { src: '', title: '' },
      position: 'Developer, System Monitor',
      startDate: 'August 1999',
      endDate: 'August 2001',
      summary: `CO-OP then contract position for development of small administrative applications.`,
      skills: [ 'Perl', 'HTML/CSS' ]
    },
  ];

  private skills = [
    { id: 1, name: 'ASP .NET', url: 'https://www.asp.net' },
    { id: 2, name: 'Ruby on Rails', url: 'http://rubyonrails.org' },
    { id: 3, name: 'Angular', url: 'http://angular.io' },
    { id: 4, name: 'Javascript', url: 'http://www.javascript.com' },
    { id: 5, name: 'jQuery', url: 'http://jquery.com' },
    { id: 6, name: 'Bootstrap', url: 'http://getbootstrap.com' },
    { id: 7, name: 'Postgres', url: 'http://www.postgresql.org' },
    { id: 8, name: 'PHP', url: 'http://php.net' },
    { id: 9, name: 'Symfony', url: 'http://symfony.com/' },
    { id: 10, name: 'WebRTC', url: 'http://webrtc.org' },
    { id: 11, name: 'Pusher', url: 'http://pusher.com' },
    { id: 12, name: 'Paper.js', url: 'http://paperjs.org' },
    { id: 13, name: 'HTML/CSS', url: 'http://www.w3.org/html/' },
    { id: 14, name: 'Prototype', url: 'http://prototype.org' },
    { id: 15, name: 'SVG', url: 'http://www.w3.org/Graphics/SVG/' }
  ];

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getAllSkills(): Skill[] {
    return this.experiences.reduceRight(
      (previousValue, currentValue) => previousValue.concat(currentValue.skills),
      []
    ).sort().filter((item, pos, ary) => {
      return !pos || item !== ary[pos - 1];
    }).map((skillName) => {
      return this.getSkillByName(skillName);
    }).filter((skill) => skill !== null || skill !== undefined);
  }

  getSkillByName(name: string): Skill {
    let foundSkill: Skill = this.skills.find((skill) => skill.name.toLowerCase() === name.toLowerCase());
    if (!foundSkill) {
      foundSkill =  { name } as Skill;
    }
    return foundSkill;
  }
}
