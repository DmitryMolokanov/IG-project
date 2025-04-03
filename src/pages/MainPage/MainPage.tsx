import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <div className="info__container">
        <div className="verb">
          <div className="verb__titile">
            <h4> We use gerunds (verb+ing):</h4>
          </div>

          <div className="verb__rules">
            <div className="verb__rule">
              <span className="verb__rule_bold">After prepositions - </span> I
              was exhausted after{" "}
              <span className="verb__rule_underline">working</span> all day.
            </div>

            <div className="verb__rule">
              <span className="verb__rule_bold">
                As the subject or object of a sentence –
              </span>
              <span className="verb__rule_underline">Doing </span>
              regular exercise is an essential part of a healthy lifestyle.
            </div>

            <div className="verb__rule">
              <span className="verb__rule_bold">
                After certain verbs (see list) –
              </span>
              Leire enjoys
              <span className="verb__rule_underline"> listening </span> to music
              in the car.
            </div>
          </div>
        </div>

        <div className="verb">
          <div className="verb__titile">
            <h4> We use infinitives with to (to + verb):</h4>
          </div>
          <div className="verb__rules">
            <div className="verb__rule">
              <span className="verb__rule_bold"> After most adjectives –</span>
              It’s not always easy
              <span className="verb__rule_underline"> to break</span> a bad
              habit.
            </div>
          </div>
          <div className="verb__rules">
            <div className="verb__rule">
              <span className="verb__rule_bold"> To indicate purpose –</span>
              Sarah left her job
              <span className="verb__rule_underline"> to start </span> a
              business.
            </div>
          </div>
          <div className="verb__rules">
            <div className="verb__rule">
              <span className="verb__rule_bold">
                After certain verbs (see list) –
              </span>
              Jimmy
              <span className="verb__rule_underline"> promised to do </span> his
              homework after dinner.
            </div>
          </div>
        </div>
        <div className="verb">
          <div className="verb__titile">
            <h4> We use the bare infinitive (verb without “to”):</h4>
          </div>
          <div className="verb__rules">
            <div className="verb__rule">
              <span className="verb__rule_bold">After modal verbs – </span>
              She can’t
              <span className="verb__rule_underline"> believe </span> his her
              luck!
            </div>
          </div>
          <div className="verb__rules">
            <div className="verb__rule">
              <span className="verb__rule_bold">After “why” expressions –</span>
              Why
              <span className="verb__rule_underline"> bother </span> if it’s all
              for nothing?
            </div>
          </div>
          <div className="verb__rules">
            <div className="verb__rule">
              <span className="verb__rule_bold">
                After certain verbs (see list) –
              </span>
              My parents never
              <span className="verb__rule_underline"> let me stay out </span>
              late.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
