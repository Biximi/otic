import { FunctionComponent } from "react";
import styles from "./OticSuiteEditIndividualDet.module.css";
const OticSuiteEditIndividualDet: FunctionComponent = () => {
  return (
    <div className={styles.oticSuiteEditIndividualDet}>
      <div className={styles.divheader}>
        <div className={styles.form}>
          <div className={styles.input}>
            <div className={styles.divplaceholder}>
              <div className={styles.searchHere}>Search here</div>
            </div>
          </div>
          <div className={styles.button}></div>
        </div>
        <div className={styles.divheaderLeft}>
          <img
            className={styles.linkLogopng}
            alt=""
            src="/link--logopng@2x.png"
          />
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.link}>
              <div className={styles.headerIcon04svg}>
                <img
                  className={styles.headerIcon04svg1}
                  alt=""
                  src="/headericon04svg.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.item1}>
            <div className={styles.link}>
              <div className={styles.headerIcon04svg}>
                <img
                  className={styles.headerIcon04svg1}
                  alt=""
                  src="/headericon05svg.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.link2}>
              <div className={styles.pseudo} />
              <div className={styles.spanuserImg}>
                <img
                  className={styles.avatar01jpgIcon}
                  alt=""
                  src="/avatar01jpg@2x.png"
                />
                <div className={styles.divuserText}>
                  <div className={styles.heading6}>Hesta Paul</div>
                  <div className={styles.administrator}>Administrator</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.listChild} />
        </div>
        <div className={styles.link3}>
          <div className={styles.div}></div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <div className={styles.divcardWrapper}>
        <div className={styles.divcard}>
          <div className={styles.form1}>
            <div className={styles.divcol12}>
              <div className={styles.heading5}>
                <div className={styles.basicDetails}>Basic Details</div>
              </div>
            </div>
            <div className={styles.divcol121}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder1}>
                    <div className={styles.teacherId}>Teacher ID</div>
                  </div>
                </div>
                <div className={styles.label}>
                  <div className={styles.teacherIdContainer}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Teacher ID `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol122}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder2}>
                    <div className={styles.teacherId}>Enter Name</div>
                  </div>
                </div>
                <div className={styles.label1}>
                  <div className={styles.name}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Name `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol123}>
              <div className={styles.divformGroup2}>
                <div className={styles.options}>
                  <div className={styles.div1}>
                    <div className={styles.male}>Male</div>
                  </div>
                </div>
                <div className={styles.combobox}>
                  <div className={styles.textbox}>
                    <div className={styles.male1}>Male</div>
                  </div>
                </div>
                <div className={styles.presentation} />
                <div className={styles.label2}>
                  <div className={styles.gender}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Gender `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol124}>
              <div className={styles.divformGroup3}>
                <div className={styles.input3}>
                  <div className={styles.divplaceholder3}>
                    <div className={styles.teacherId}>DD-MM-YYYY</div>
                  </div>
                </div>
                <div className={styles.div2}></div>
                <div className={styles.label3}>
                  <div className={styles.dateOfBirthContainer}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Date Of Birth `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol125}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder4}>
                    <div className={styles.teacherId}>Enter Phone</div>
                  </div>
                </div>
                <div className={styles.label4}>
                  <div className={styles.mobile}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Mobile `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol126}>
              <div className={styles.divformGroup3}>
                <div className={styles.input3}>
                  <div className={styles.divplaceholder3}>
                    <div className={styles.teacherId}>DD-MM-YYYY</div>
                  </div>
                </div>
                <div className={styles.div2}></div>
                <div className={styles.label5}>
                  <div className={styles.joiningDateContainer}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Joining Date `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol127}>
              <div className={styles.input1}>
                <div className={styles.divplaceholder6}>
                  <div className={styles.teacherId}>Enter Joining Date</div>
                </div>
              </div>
              <div className={styles.label6}>
                <div className={styles.qualification}>
                  <span className={styles.nameTxtContainer}>
                    <span>{`Qualification `}</span>
                    <span className={styles.span}>*</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.divcol128}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder7}>
                    <div className={styles.teacherId}>Enter Experience</div>
                  </div>
                </div>
                <div className={styles.label7}>
                  <div className={styles.experience}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Experience `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol129}>
              <div className={styles.heading51}>
                <div className={styles.basicDetails}>Login Details</div>
              </div>
            </div>
            <div className={styles.divcol1210}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder8}>
                    <div className={styles.teacherId}>Enter Username</div>
                  </div>
                </div>
                <div className={styles.label8}>
                  <div className={styles.username}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Username `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1211}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder9}>
                    <div className={styles.teacherId}>Enter Mail Id</div>
                  </div>
                </div>
                <div className={styles.label9}>
                  <div className={styles.emailIdContainer}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Email ID `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1212}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder10}>
                    <div className={styles.teacherId}>Enter Password</div>
                  </div>
                </div>
                <div className={styles.label10}>
                  <div className={styles.password}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Password `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1213}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder11}>
                    <div className={styles.teacherId}>Repeat Password</div>
                  </div>
                </div>
                <div className={styles.label11}>
                  <div className={styles.repeatPasswordContainer}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Repeat Password `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1214}>
              <div className={styles.heading5}>
                <div className={styles.basicDetails}>Address</div>
              </div>
            </div>
            <div className={styles.divcol1215}>
              <div className={styles.divformGroup11}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder12}>
                    <div className={styles.teacherId}>Enter address</div>
                  </div>
                </div>
                <div className={styles.label12}>
                  <div className={styles.address1}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Address `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1216}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder13}>
                    <div className={styles.teacherId}>Enter City</div>
                  </div>
                </div>
                <div className={styles.label13}>
                  <div className={styles.city}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`City `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1217}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder14}>
                    <div className={styles.teacherId}>Enter State</div>
                  </div>
                </div>
                <div className={styles.label14}>
                  <div className={styles.state}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`State `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1218}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder15}>
                    <div className={styles.teacherId}>Enter Zip</div>
                  </div>
                </div>
                <div className={styles.label15}>
                  <div className={styles.zipCodeContainer}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Zip Code `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1219}>
              <div className={styles.divformGroup}>
                <div className={styles.input1}>
                  <div className={styles.divplaceholder3}>
                    <div className={styles.teacherId}>Enter Country</div>
                  </div>
                </div>
                <div className={styles.label16}>
                  <div className={styles.country}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Country `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1220}>
              <div className={styles.button1}>
                <div className={styles.submit}>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divsidebarWrapper}>
        <div className={styles.divsidebar}>
          <div className={styles.divslimscrolldiv}>
            <div className={styles.divsidebarInner}>
              <div className={styles.link4}>
                <div className={styles.ifeatherGrid}>
                  <div className={styles.submit}></div>
                </div>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.pseudo1} />
              </div>
              <div className={styles.itemLink} />
              <div className={styles.sidebar}>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper}>
                    <div className={styles.span17}>
                      <div className={styles.submit}>Students</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span17}>
                      <div className={styles.submit}>Teachers</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas2}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.span19}>
                    <div className={styles.submit}>Departments</div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas3}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span20}>
                      <div className={styles.submit}>Subects</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Management</div>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas4}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span17}>
                      <div className={styles.submit}>Accounts</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemLink6}>
                  <div className={styles.ifas5}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span17}>
                      <div className={styles.submit}>Exam list</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink7}>
                  <div className={styles.ifas6}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span17}>
                      <div className={styles.submit}>Time Table</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink8}>
                  <div className={styles.ifas6}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span17}>
                      <div className={styles.submit}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Pages</div>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas3}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.span25}>
                    <div className={styles.spanInner}>
                      <div className={styles.authenticationWrapper}>
                        <div className={styles.submit}>Authentication</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.pseudo7}>
                    <div className={styles.div}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OticSuiteEditIndividualDet;
