import React, { Fragment } from "react";
import { footerSection, socialIcon, year } from "./social_utils";

const Social = () => {
  return (
    <section>
      <section>
        {footerSection.map((section, i) => (
          <React.Fragment key={section}>
            {i === 0 ? (
              <section className="flex  w-[80%] justify-between">
                {socialIcon.map((i) => (
                  <Fragment key={i.name}>
                    <div className="">{i.icon}</div>
                  </Fragment>
                ))}
              </section>
            ) : (
              <section className="text-[.8rem] font-normal mt-2">
                © {year} 1800 Stores Ltd. All Rights
                Reserved.
              </section>
            )}
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};

export default Social;
