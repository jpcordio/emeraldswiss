import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../assets/images/health/hrisks.webp";
import Banner2 from "../assets/images/health/BGlogoRed.webp";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollToTopButton from "../components/ScrollToTopButton";


function BreedHealth() {

  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <div>
      <Header header="Breed Health" />

      {/* <!-- Drop Down Menu Heading 1 --> */}
      <div class="container" id="contentHealth">
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <h5 id="health-tests" class="text-center">Essential Health Tests</h5>
            {/* <!-- Image Bernese Health Problems (source: Dutch Kennel Club) --> */}
            <img src={Banner} title="Main Health Problems" class="img-fluid mb-2" alt="Banner: Bernese Muntain Dog Health Risks" />
              <div class="col-md-10 offset-md-1"> 
                {/*<!-- Adjust the column width and offset for smaller screens -->
                 <!-- Health Tests List with Custom Bullet Points --> */}
                <ul class="custom-list">
                  <li><strong>Hip Evaluation:</strong> This assessment is crucial to detect hip dysplasia early in order to ensure Bernese Mountain Dog’s mobility and comfort.</li>
                  <li><strong>Elbow Evaluation:</strong> Checking for elbow dysplasia helps maintain joint health and prevents discomfort.</li>
                  <li><strong>Eye Clearance:</strong> Eye exam performed by an ophthalmologist ensures healthy vision and identifies any potential issues.</li>
                  <li><strong>Degenerative Myelopathy (DM):</strong> DNA testing for both SOD1-A and SOD1-B variants helps assess susceptibility to this neurodegenerative disease.</li>
                  <li><strong>von Willebrand Disease:</strong> A genetic test for blood clotting disorder.</li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      {/* <!-- Drop Down Menu Heading 2 -->			 */}
		<div class="container" id="contentHips">
            <div class="row mt-3">
			        <div class="col-md-12 text-justify">
					<h4 id="hip-screening" class="text-center">Hip Evaluation</h4>
					{/* <!-- Hip Evaluation Text --> */}
					<p> Hip Dysplasia is a genetic condition most commonly seen in large breed dogs, including Bernese Mountain Dogs, where the hip joint does not develop correctly. Environmental factors including fast growth, low quality diet as well as excessive weight and increased physical activity can also increase the risk of such dysplasia development. Weakness and pain in the hind legs are the usual clinical signs. The dog appears wobbly and is reluctant to rise from a sitting or lying position. Some adult dogs will limp or become unwilling to climb stairs. These signs can be seen in puppies as early as a few months old but are most common in dogs one to two years of age. However, it often takes years of gradual bone degeneration until a dog becomes clearly symptomatic. While each case is different in terms of progression and symptoms, and such deterioration can also be caused by abnormal wear and tear on healthy dog joints, it is recommended by FCI (World Canine Organisation) to screen all breeding stock regardless of clinical symptoms in order to establish physical changes early and to reduce the risk of producing affected puppies.
					</p>
					<p> Generally, the most reliable way of determining the health of a dog’s hips is by having your dog x-rayed and assessed by a specialist. Globally, there are several screening schemes evaluating the severity of hip dysplasia: FCI (Globally), BVA (UK), OFA (North America) and (SV) Germany. The Federation Cynologique Internationale (FCI) system is used by all members in most European countries, Russia, South America, and Asia, from 12 months of age for official scoring (18 months for giant breeds). Each joint is allotted to one of five grades (A-E) that are defined descriptively. The British Veterinary Association (BVA) system is used in Britain, Ireland, Australia and New Zealand for dogs older than 12 months. Nine radiographic criteria are evaluated and added together in the final report to account for the score between 0 and 52 points for each joint. Such an approach creates a score based on individual parameters in each hip, including both those which describe subluxation and those which describe secondary, degenerative change. 
					</p>
					<p> Consequently, the BVA recommends breeding only from dogs with scores below the breed median or well below the breed mean which takes into account the fact that the same score can arise from different causes. The Orthopaedic Foundation for Animals (OFA) system is used in the USA and Canada for dogs minimum 2 years of age. Seven grades are defined where the borderline grade is assigned to incongruent joints of undetermined quality but without degenerative changes. In Switzerland, however, a unique system is used linking the British system scoring points with the six radiographic criteria from the FCI grading system allowing to quantify the degree of laxity and arthritic changes for a more systematic and objective scoring. The minimum age for official scoring in Switzerland for the Bernese Mountain Dog is 14 months.
					</p>
					<p> Final grading is based on the appearance of the worst of the two hips for FCI, OFA, Germany and Switzerland, while for BVA the scoring points of both joints are added together representing the final score (excl. Australia). Under FCI regulations grades A and B are considered normal joints, whereas the grades D and E are dysplastic, while grade C represent mild dysplasia calling for breed-specific breeding strategies.
					</p>
					<h6 class="text-center"> Press To Compare Commonly Used Hip Scoring Schemes</h6>
				</div>


				
				{/* <!-- Hip Evaluation Summary Table --> */}
				<div class="container mt-3" id="contentTable">
					<div class="row">
						<div class="col-md-12 text-center">	
            <Button
              id="toggleTableBtn"
              className="btn btn-success mb-2"
              onClick={toggleTableVisibility}
            >
              Toggle Table
            </Button>
            <br />
              {isTableVisible && (
							<table id="healthTable" className="table table-bordered">
								<thead>
									<tr>
										<th>FCI</th>
										<th>BVA (Single Joint)</th>
										<th>OFA</th>
										<th>SV (Germany)</th>
										<th>Swiss</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>A (Excellent/Normal)</td>
										<td>0</td>
										<td>Excellent</td>
										<td>A1 (Normal)</td>
										<td>0</td>
									</tr>
									<tr>
										<td></td>
										<td>1 - 3</td>
										<td>Good</td>
										<td>A2 (Normal)</td>
										<td>1 - 2</td>
									</tr>
									<tr>
										<td>B (Good/ Borderline)</td>
										<td>4 - 6</td>
										<td>Fair</td>
										<td>B1 (Fast Normal)</td>
										<td>3 - 4</td>
									</tr>
									<tr>
										<td></td>
										<td>7 - 8</td>
										<td>Borderline</td>
										<td>B2 (Fast Normal)</td>
										<td>5 - 6</td>
									</tr>
									<tr>
										<td>C (Mild Dysplasia)</td>
										<td>9 - 12</td>
										<td>Mild</td>
										<td>C1 (Noch Zugelassen)</td>
										<td>7 - 9</td>
									</tr>
									<tr>
										<td></td>
										<td>13 - 18</td>
										<td>Mild</td>
										<td>C2 (Noch Zugelassen)</td>
										<td>10 - 12</td>
									</tr>
									<tr>
										<td>D (Moderate Dysplasia)</td>
										<td>19 - 24</td>
										<td>Moderate</td>
										<td>D1 (Mittlere)</td>
										<td>13 - 15</td>
									</tr>
									<tr>
										<td></td>
										<td>25 - 30</td>
										<td>Moderate</td>
										<td>D2 (Mittlere)</td>
										<td>16 - 18</td>
									</tr>
									<tr>
										<td>E (Severe Dysplasia)</td>
										<td> 30</td>
										<td>Severe</td>
										<td>E1 (Schwere)</td>
										<td>19 - 21</td>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<td>Severe</td>
										<td>E2 (Schwere)</td>
										<td>22 - 44</td>
									</tr>
								</tbody>
							</table>
              )}
						</div>
					</div>
				</div>
			</div>
		</div>

    <div class="container mt-4" id="contentBernergarde">
            <div class="row mt-3">
                <div class="col-md-12 text-justify">
					<h4 id="berner-garde" class="text-center">Berner-Garde Foundation</h4>
					{/* <!-- Berner-Garde Text --> */}
					<p> Berner-Garde’s mission is to ensure all Bernese Mountain Dogs have a long and healthy lifespan of 12-14 years. In order to advance on the health issues, a global health and pedigree database was launched in 1995 which has become an invaluable resource aiding the reduction of genetic diseases in the breed, through voluntary submissions from owners, breeders and other sources compiling the information of over 200,000 dogs. This open sharing of information on affected, as well as healthy dogs is unique and has proved to be vital to the Bernese community, veterinarians and scientists with an interests in the breed’s health.
					</p>
					<p> Throughout the years it evolved into a reputable tool to assist responsible Bernese breeders in their research and planning for genetically healthy lines in the future. Additionally, potential Bernese puppy buyers find it an excellent resource to verify that the breeder they are talking with performs genetic testing on dogs they choose for breeding. Beyond that, a buyer can check if the parents of puppies have good hips and elbows, as well as other genetic tests.
					</p>
					<p> Health and certification information is verified by the operators to insure the data is as accurate and as consistent as possible. Owners/breeders can submit dog or litter data via the forms available on the BernerGarde.org website or by directly contacting our kennel which serves as the Berner-Garde representative for Ireland.  
					</p>
					
					{/* <!-- Button Leading to Our Dogs page --> */}
					<div class="container text-center mt-3">
            <Link to="/contact">
              <Button variant="success">Contact Us</Button>
            </Link> 
					</div>
					
					{/* <!-- Press on Image Link to Organisation Website --> */}
					<h6 class="text-center mt-4"> To Read More Click on Berner-Garde Logo </h6>
					<div class="text-center">
						<a href="https://www.bernergarde.org" target="_blank" rel="noreferrer">
							<img src={Banner2} title="Go To Bernergarde.org" alt="Bernergarde" class="img-fluid" />
						</a>
					</div>
				</div>
			</div>
		</div>

      <Footer />
	  <ScrollToTopButton />  
    </div>
  );
}

export default BreedHealth;
