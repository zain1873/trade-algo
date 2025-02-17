import React from "react";
import editorChoice1 from "../assets/images/editor-choice1.webp";
import editorChoice2 from "../assets/images/editor-choice2.webp";
import editorChoice3 from "../assets/images/editor-choice3.webp";
import editorChoice4 from "../assets/images/reddit.webp";


function editorChoice() {
  return (
    <section className="section_edit_choice">
      <div className="container">
        <div class="sec_heading">
          <h2 class="pb-4">Editors' Choice</h2>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="editors-choice">
              <a href="">
                <div className="choice_img">
                <img
                  className="obj_fit"
                  src={editorChoice1}
                  alt="editorChoiceimg"
                />
                </div>
                <div className="editor_desc">
                  <h3>Markets</h3>
                  <p>
                    This is How a Cheap Balanced Portfolio Flattens Those Pricey
                    Hedge Funds
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="editors-choice">
              <a href="">
                <div className="choice_img">
                <img
                  className="obj_fit"
                  src={editorChoice2}
                  alt="editorChoiceimg"
                />
                </div>
                <div className="editor_desc">
                  <h3>Markets</h3>
                  <p>
                  The 10-year Yield Drops to Its Lowest Level in Three Weeks as the Fed's Preferred Inflation Measure Rises
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="editors-choice">
              <a href="">
                <div className="choice_img">
                <img
                  className="obj_fit"
                  src={editorChoice3}
                  alt="editorChoiceimg"
                />
                </div>
                <div className="editor_desc">
                  <h3>Markets</h3>
                  <p>
                  The Stock of AMD Faces a New Risk And This One Has Nothing to Do With AI
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="editors-choice">
              <a href="">
                <div className="choice_img">
                <img
                  className="obj_fit"
                  src={editorChoice4}
                  alt="editorChoiceimg"
                />

                </div>
             
                <div className="editor_desc">
                  <h3>Markets</h3>
                  <p>
                  Google's 'Curveball' of Reddit Traffic Offers Investors a Buying Opportunity
                  </p>
                </div>
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default editorChoice;
