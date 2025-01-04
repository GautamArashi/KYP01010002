const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About KYP</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Program</h2>
          <p className="text-gray-600 mb-6">
            KYP (Kushal Yuva Program) is an initiative by the Bihar Government under Bihar Skill 
            Development Mission (BSDM). Our main goal is to make youth self-dependent through 
            digital literacy and enhance their employability skills through life skills training.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Objective</h2>
          <p className="text-gray-600">
            We aim to provide Bihar's youth with a competitive edge and make them financially 
            independent by improving their employability through comprehensive skill development.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Skill Development</h3>
              <p className="text-gray-600">Basic computer skills including MS Office, Internet usage, 
              and email drafting, along with personality development modules</p>
            </li>
            <li>
              <h3 className="font-semibold">Eligibility</h3>
              <p className="text-gray-600">Open for Bihar youth aged 15-28 years with minimum 10th pass 
              qualification and valid Bihar residential proof</p>
            </li>
            <li>
              <h3 className="font-semibold">Duration & Cost</h3>
              <p className="text-gray-600">3-month comprehensive program including theoretical and 
              practical training, completely free of cost</p>
            </li>
            <li>
              <h3 className="font-semibold">Certification</h3>
              <p className="text-gray-600">Government-recognized certification upon successful 
              completion of the program</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Training Components</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Digital literacy and computer skills</li>
              <li>Communication skills development</li>
              <li>Personality development sessions</li>
              <li>Regular online assessments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Learning Outcomes</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Proficiency in basic computer operations</li>
              <li>Enhanced communication abilities</li>
              <li>Improved employability skills</li>
              <li>Professional development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;