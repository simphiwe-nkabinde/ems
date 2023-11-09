import React from 'react'
import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Employees from './Employees'

export default function Layout() {
    return (
        <section className="g-sidenav-show   bg-gray-100">
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            <SideNav />
            <main className="main-content position-relative border-radius-lg ">
                <Navbar />
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/employees' element={<Employees />} />
                </Routes>
            </main>
            <div className="fixed-plugin">
                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="fa fa-cog py-2"> </i>
                </a>
                <div className="card shadow-lg">
                    <div className="card-header pb-0 pt-3 ">
                        <div className="float-start">
                            <h5 className="mt-3 mb-0">Argon Configurator</h5>
                            <p>See our dashboard options.</p>
                        </div>
                        <div className="float-end mt-4">
                            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                        {/* <!-- End Toggle Button --> */}
                    </div>
                    <hr className="horizontal dark my-1" />
                    <div className="card-body pt-sm-3 pt-0 overflow-auto" />
                    {/* <!-- Sidebar Backgrounds --> */}
                    <div>
                        <h6 className="mb-0">Sidebar Colors</h6>
                    </div>
                    <a href="javascript:void(0)" className="switch-trigger background-color">
                        <div className="badge-colors my-2 text-start">
                            <span className="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
                            <span className="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
                            <span className="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
                            <span className="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
                            <span className="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
                            <span className="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
                        </div>
                    </a>
                    {/* <!-- Sidenav Type --> */}
                    <div className="mt-3">
                        <h6 className="mb-0">Sidenav Type</h6>
                        <p className="text-sm">Choose between 2 different sidenav types.</p>
                    </div>
                    <div className="d-flex">
                        <button className="btn bg-gradient-primary w-100 px-3 mb-2 active me-2" data-className="bg-white" onclick="sidebarType(this)">White</button>
                        <button className="btn bg-gradient-primary w-100 px-3 mb-2" data-className="bg-default" onclick="sidebarType(this)">Dark</button>
                    </div>
                    <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
                    {/* <!-- Navbar Fixed --> */}
                    <div className="d-flex my-3">
                        <h6 className="mb-0">Navbar Fixed</h6>
                        <div className="form-check form-switch ps-0 ms-auto my-auto">
                            <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)" />
                        </div>
                    </div>
                    <hr className="horizontal dark my-sm-4" />
                    <div className="mt-2 mb-5 d-flex">
                        <h6 className="mb-0">Light / Dark</h6>
                        <div className="form-check form-switch ps-0 ms-auto my-auto">
                            <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)" />
                        </div>
                    </div>
                    <a className="btn bg-gradient-dark w-100" href="https://www.creative-tim.com/product/argon-dashboard">Free Download</a>
                    <a className="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard">View documentation</a>
                    <div className="w-100 text-center">
                        <a className="github-button" href="https://github.com/creativetimofficial/argon-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/argon-dashboard on GitHub">Star</a>
                        <h6 className="mt-3">Thank you for sharing!</h6>
                        <a href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fargon-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
                            <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
                            <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                        </a>
                    </div>
                </div>
            </div>
        </section>

        // <script src="../assets/js/core/popper.min.js"></script>
        // <script src="../assets/js/core/bootstrap.min.js"></script>
        // <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
        // <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
        // <script src="../assets/js/plugins/chartjs.min.js"></script>
        //         <script>
        //             var ctx1 = document.getElementById("chart-line").getContext("2d");

        //             var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);

        //             gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
        //             gradientStroke1.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
        //             gradientStroke1.addColorStop(0, 'rgba(94, 114, 228, 0)');
        //             new Chart(ctx1, {
        //                 type: "line",
        //             data: {
        //                 labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        //             datasets: [{
        //                 label: "Mobile apps",
        //             tension: 0.4,
        //             borderWidth: 0,
        //             pointRadius: 0,
        //             borderColor: "#5e72e4",
        //             backgroundColor: gradientStroke1,
        //             borderWidth: 3,
        //             fill: true,
        //             data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        //             maxBarThickness: 6

        //     }],
        //   },
        //             options: {
        //                 responsive: true,
        //             maintainAspectRatio: false,
        //             plugins: {
        //                 legend: {
        //                 display: false,
        //       }
        //     },
        //             interaction: {
        //                 intersect: false,
        //             mode: 'index',
        //     },
        //             scales: {
        //                 y: {
        //                 grid: {
        //                 drawBorder: false,
        //             display: true,
        //             drawOnChartArea: true,
        //             drawTicks: false,
        //             borderDash: [5, 5]
        //         },
        //             ticks: {
        //                 display: true,
        //             padding: 10,
        //             color: '#fbfbfb',
        //             font: {
        //                 size: 11,
        //             family: "Open Sans",
        //             style: 'normal',
        //             lineHeight: 2
        //           },
        //         }
        //       },
        //             x: {
        //                 grid: {
        //                 drawBorder: false,
        //             display: false,
        //             drawOnChartArea: false,
        //             drawTicks: false,
        //             borderDash: [5, 5]
        //         },
        //             ticks: {
        //                 display: true,
        //             color: '#ccc',
        //             padding: 20,
        //             font: {
        //                 size: 11,
        //             family: "Open Sans",
        //             style: 'normal',
        //             lineHeight: 2
        //           },
        //         }
        //       },
        //     },
        //   },
        // });
        //         </script>
        //         <script>
        // var win = navigator.platform.indexOf('Win') > -1;
        //             if (win && document.querySelector('#sidenav-scrollbar')) {
        //   var options = {
        //                 damping: '0.5'
        //   }
        //             Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
        // }
        //         </script>

        // <script async defer src="https://buttons.github.io/buttons.js"></script>

        // <script src="../assets/js/argon-dashboard.min.js?v=2.0.4"></script>
    )
}
