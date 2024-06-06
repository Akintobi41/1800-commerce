import React, { Fragment } from "react";
import { socialIcon } from "./social_utils";
import { footerSection } from "./social_utils";
import { year } from "./social_utils";

const Social = () => {

  return (
    <section>
      <section>
        {footerSection.map((section, i) => (
          <React.Fragment key={section}>
            {i === 0 ? (
              <section>
                {socialIcon.map((i) => (
                  <Fragment key={i.name}>{i.icon}</Fragment>
                ))}
              </section>
            ) : (
              <section className='text-[.8rem] font-normal'>
                © {year} 1800 Stores Ltd. All Rights
                Reserved
              </section>
            )}
          </React.Fragment>
        ))}
      </section>

    </section>
  );
};

export default Social;

