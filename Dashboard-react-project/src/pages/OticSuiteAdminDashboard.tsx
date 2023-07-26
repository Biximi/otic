import { FunctionComponent, useCallback } from "react";
import styles from "./OticSuiteAdminDashboard.module.css";
const OticSuiteAdminDashboard: FunctionComponent = () => {
  const onItemContainer2Click = useCallback(() => {
    // Please sync "Otic Suite_Admin-Profile" to the project
  }, []);

  return (
    <div className={styles.oticSuiteAdminDashboard}>
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
          <div className={styles.item2} onClick={onItemContainer2Click}>
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
      <div className={styles.divrow}>
        <div className={styles.divcolXl6}>
          <div className={styles.divcard}>
            <div className={styles.divcardHeader}>
              <div className={styles.heading5}>
                <div className={styles.starStudents}>Star Students</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.itemLink}>
                  <div className={styles.div1}></div>
                </div>
              </div>
            </div>
            <div className={styles.divcardBody}>
              <div className={styles.divtableResponsive}>
                <div className={styles.table}>
                  <div className={styles.headerRow}>
                    <div className={styles.cell}>
                      <div className={styles.id}>ID</div>
                    </div>
                    <div className={styles.cell1}>
                      <div className={styles.id}>Name</div>
                    </div>
                    <div className={styles.cell2}>
                      <div className={styles.id}>Class</div>
                    </div>
                    <div className={styles.cell3}>
                      <div className={styles.id}>Percentage</div>
                    </div>
                    <div className={styles.cell4}>
                      <div className={styles.id}>Year</div>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.row}>
                      <div className={styles.dataPre2209}>KC0001</div>
                      <div className={styles.dataLink}>
                        <img
                          className={styles.avatar02jpgIcon}
                          alt=""
                          src="/avatar02jpg@2x.png"
                        />
                        <div className={styles.mugenyiPaul}> Mugenyi Paul</div>
                      </div>
                      <div className={styles.data1185}>P1</div>
                      <div className={styles.data98}>80%</div>
                      <div className={styles.data2019}>2020</div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.dataPre2209}>KC0002</div>
                      <div className={styles.dataLink1}>
                        <img
                          className={styles.avatar02jpgIcon}
                          alt=""
                          src="/avatar01jpg1@2x.png"
                        />
                        <div className={styles.mugenyiPaul}>Mulungi Faith</div>
                      </div>
                      <div className={styles.data1185}>P4</div>
                      <div className={styles.data995}>75%</div>
                      <div className={styles.data2019}>2022</div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.dataPre2209}>KC0003</div>
                      <div className={styles.dataLink2}>
                        <img
                          className={styles.avatar02jpgIcon}
                          alt=""
                          src="/avatar03jpg@2x.png"
                        />
                        <div className={styles.mugenyiPaul}>Kalungi Peter</div>
                      </div>
                      <div className={styles.data1185}>P2</div>
                      <div className={styles.data995}>90%</div>
                      <div className={styles.data2019}>2019</div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.dataPre2209}>KC0004</div>
                      <div className={styles.dataLink3}>
                        <img
                          className={styles.avatar02jpgIcon}
                          alt=""
                          src="/avatar03jpg@2x.png"
                        />
                        <div className={styles.mugenyiPaul}>Mugenyi Paul</div>
                      </div>
                      <div className={styles.data1185}>P7</div>
                      <div className={styles.data982}>95.2%</div>
                      <div className={styles.data2019}>2022</div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.dataPre2209}>KC0005</div>
                      <div className={styles.dataLink}>
                        <img
                          className={styles.avatar02jpgIcon}
                          alt=""
                          src="/avatar03jpg@2x.png"
                        />
                        <div className={styles.mugenyiPaul}>Kabusi Elijah</div>
                      </div>
                      <div className={styles.data1185}>P5</div>
                      <div className={styles.data98}>86%</div>
                      <div className={styles.data2019}>2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcard1}>
          <div className={styles.divcardHeader1}>
            <div className={styles.heading5}>
              <div className={styles.starStudents}>Star Students</div>
            </div>
            <div className={styles.list1}>
              <div className={styles.itemLink}>
                <div className={styles.div1}></div>
              </div>
            </div>
          </div>
          <div className={styles.divactivityGroups}>
            <div className={styles.divactivityAwards}>
              <img
                className={styles.divawardBoxsIcon}
                alt=""
                src="/divawardboxs@2x.png"
              />
              <div className={styles.divawardListOuts}>
                <div className={styles.heading4}>Winner House in sports</div>
                <div className={styles.heading52}>Lion House was the first</div>
              </div>
              <div className={styles.divawardTimeList}>
                <div className={styles.span}>
                  <div className={styles.daysAgo}>5 Days ago</div>
                </div>
              </div>
            </div>
            <div className={styles.divactivityAwards}>
              <img
                className={styles.divawardBoxsIcon}
                alt=""
                src="/divawardboxs1@2x.png"
              />
              <div className={styles.divawardListOuts1}>
                <div className={styles.heading6}>School Debate challenge</div>
                <div className={styles.heading52}>
                  P5 was the leading class in the joint Class debate
                </div>
              </div>
              <div className={styles.divawardTimeList}>
                <div className={styles.span1}>
                  <div className={styles.daysAgo}>6 Days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divpageSubHeader}>
        <div className={styles.heading3}>
          <div className={styles.welcomeAdmin}>Welcome Admin!</div>
        </div>
        <div className={styles.list3}>
          <div className={styles.authenticationWrapper}>
            <div className={styles.linkHome}>Home</div>
          </div>
          <div className={styles.item4}>
            <div className={styles.linkHome}>/</div>
            <div className={styles.linkHome}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.divrow1}>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard2}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo}>
                <div className={styles.heading61}>Students</div>
                <div className={styles.heading31}>4000</div>
              </div>
              <div className={styles.divdbIcon}>
                <div className={styles.headerIcon04svg}>
                  <div className={styles.dashIcon01svg1}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard2}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo1}>
                <div className={styles.heading61}>Awards</div>
                <div className={styles.heading31}>70+</div>
              </div>
              <div className={styles.divdbIcon1}>
                <div className={styles.headerIcon04svg}>
                  <div className={styles.dashIcon02svg1}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard2}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo2}>
                <div className={styles.heading61}>Department</div>
                <div className={styles.heading31}>5+</div>
              </div>
              <div className={styles.divdbIcon2}>
                <div className={styles.headerIcon04svg}>
                  <div className={styles.dashIcon03svg1}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector2@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard2}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo3}>
                <div className={styles.heading61}>Revenue</div>
                <div className={styles.heading34}>UGX 450,000,000</div>
              </div>
              <div className={styles.divdbIcon3}>
                <div className={styles.headerIcon04svg}>
                  <div className={styles.dashIcon04svg1}>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector3@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divrow2}>
        <div className={styles.divcolMd12}>
          <div className={styles.divcard6}>
            <div className={styles.divcardHeader2}>
              <div className={styles.divrow3}>
                <div className={styles.divcol6}>
                  <div className={styles.starStudents}>Overview</div>
                </div>
                <div className={styles.divcol61}>
                  <div className={styles.list4}>
                    <div className={styles.item5}>
                      <div className={styles.spancircleBlue} />
                      <div className={styles.teacher}>Teacher</div>
                    </div>
                    <div className={styles.item6}>
                      <img
                        className={styles.spancircleGreenIcon}
                        alt=""
                        src="/spancirclegreen.svg"
                      />
                      <div className={styles.teacher}>Student</div>
                    </div>
                    <div className={styles.item7}>
                      <div className={styles.itemLink}>
                        <div className={styles.div1}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcardBody1}>
              <div className={styles.svg}>
                <div className={styles.svgjssvg1006}>
                  <div className={styles.svgjsg1008}>
                    <img
                      className={styles.svgjsline1013Icon}
                      alt=""
                      src="/svgjsline1013.svg"
                    />
                    <div className={styles.svgjsg1025}>
                      <div className={styles.svgjsg1026}>
                        <div className={styles.svgjstext1028}>Jan</div>
                        <div className={styles.svgjstext1031}>Feb</div>
                        <div className={styles.svgjstext1034}>Mar</div>
                        <div className={styles.svgjstext1037}>Apr</div>
                        <div className={styles.svgjstext1040}>May</div>
                        <div className={styles.svgjstext1043}>Jun</div>
                        <div className={styles.svgjstext1046}>Jul</div>
                      </div>
                      <img
                        className={styles.svgjsline1048Icon}
                        alt=""
                        src="/svgjsline1048.svg"
                      />
                    </div>
                    <img
                      className={styles.svgjsg1065Icon}
                      alt=""
                      src="/svgjsg1065.svg"
                    />
                    <img
                      className={styles.svgjsg1016Icon}
                      alt=""
                      src="/svgjsg1016.svg"
                    />
                    <img
                      className={styles.svgjsline1084Icon}
                      alt=""
                      src="/svgjsline1013.svg"
                    />
                    <img
                      className={styles.svgjsline1084Icon}
                      alt=""
                      src="/svgjsline1013.svg"
                    />
                    <img
                      className={styles.svgjsrect1091Icon}
                      alt=""
                      src="/svgjsline1013.svg"
                    />
                    <img
                      className={styles.svgjsrect1091Icon}
                      alt=""
                      src="/svgjsline1013.svg"
                    />
                  </div>
                  <img
                    className={styles.svgjsrect1012Icon}
                    alt=""
                    src="/svgjsline1013.svg"
                  />
                  <div className={styles.svgjsg1049}>
                    <div className={styles.svgjsg1050}>
                      <div className={styles.svgjstext1051}>70</div>
                      <div className={styles.svgjstext1053}>60</div>
                      <div className={styles.svgjstext1055}>50</div>
                      <div className={styles.svgjstext1057}>40</div>
                      <div className={styles.svgjstext1059}>30</div>
                      <div className={styles.svgjstext1061}>20</div>
                      <div className={styles.svgjstext1063}>10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolMd12}>
          <div className={styles.divcard6}>
            <div className={styles.divcardHeader2}>
              <div className={styles.divrow3}>
                <div className={styles.divcol62}>
                  <div className={styles.starStudents}>Number of Students</div>
                </div>
                <div className={styles.divcol63}>
                  <div className={styles.list5}>
                    <div className={styles.item8}>
                      <div className={styles.spancircleBlue1} />
                      <div className={styles.teacher}>Girls</div>
                    </div>
                    <div className={styles.item9}>
                      <div className={styles.spancircleGreen} />
                      <div className={styles.teacher}>Boys</div>
                    </div>
                    <div className={styles.item7}>
                      <div className={styles.itemLink}>
                        <div className={styles.div1}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcardBody2}>
              <div className={styles.svg}>
                <div className={styles.svgjssvg1006}>
                  <img
                    className={styles.svgjsg1095Icon}
                    alt=""
                    src="/svgjsg1095.svg"
                  />
                  <div className={styles.svgjstext1097} />
                  <div className={styles.svgjsg1138}>
                    <div className={styles.svgjsg1050}>
                      <div className={styles.svgjstext1028}>4000</div>
                      <div className={styles.svgjstext1142}>3000</div>
                      <div className={styles.svgjstext1144}>2000</div>
                      <div className={styles.svgjstext1146}>1000</div>
                      <div className={styles.svgjstext1148}>0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <div className={styles.divsidebarWrapper}>
        <div className={styles.divsidebar}>
          <div className={styles.divslimscrolldiv}>
            <div className={styles.divsidebarInner}>
              <div className={styles.link6}>
                <div className={styles.ifeatherGrid}>
                  <div className={styles.students}></div>
                </div>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.span2} />
                <div className={styles.pseudo1} />
              </div>
              <div className={styles.itemLink2} />
              <div className={styles.sidebar}>
                <div className={styles.itemLink3}>
                  <div className={styles.ifas}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper}>
                    <div className={styles.span3}>
                      <div className={styles.students}>Students</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemLink3}>
                  <div className={styles.ifas}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span3}>
                      <div className={styles.students}>Teachers</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemLink3}>
                  <div className={styles.ifas2}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.span5}>
                    <div className={styles.students}>Departments</div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemLink3}>
                  <div className={styles.ifas3}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span6}>
                      <div className={styles.students}>Subects</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Management</div>
                <div className={styles.itemLink3}>
                  <div className={styles.ifas4}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span3}>
                      <div className={styles.students}>Accounts</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div}></div>
                  </div>
                </div>
                <div className={styles.itemLink8}>
                  <div className={styles.ifas5}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span3}>
                      <div className={styles.students}>Exam list</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink9}>
                  <div className={styles.ifas6}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span3}>
                      <div className={styles.students}>Time Table</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink10}>
                  <div className={styles.ifas6}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span3}>
                      <div className={styles.students}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Pages</div>
                <div className={styles.itemLink3}>
                  <div className={styles.ifas3}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.span11}>
                    <div className={styles.spanInner}>
                      <div className={styles.authenticationWrapper}>
                        <div className={styles.students}>Authentication</div>
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
      <img className={styles.createIcon} alt="" src="/create@2x.png" />
    </div>
  );
};

export default OticSuiteAdminDashboard;
