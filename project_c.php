<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C Project</title>
  <!--Import Google Icon Font-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!--Import materialize.css-->
  <link type="text/css" rel="stylesheet" href="./css/materialize.css"  media="screen,projection"/>
  <link rel="stylesheet" href="./css/style_c.css">
  <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet">
</head>

<body>

    <!--NavBar-->
    <div class="navbar-fixed">
        <nav class="nav-color">
            <div class="nav-wrapper">
                <a href="index.php" class="brand-logo z-depth-2" >Main Page</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down z-depth-1">
                    <li><a class="z-depth-1" href="#c">About C</a></li>
                    <li><a class="z-depth-1" href="#project">Our project</a></li>
                </ul>
            </div>
        </nav>
    </div>
 

  <div class="parallax-container">
      <div class="parallax"><img src="./img/c/connect1.png" alt="Connect4"></div>
  </div>

    <div class="section">
        <div class="row container">
            <h1 class="header" id="c">About the C language</h1>
            <div class="row">
                <div class="col l1 hide-on-small-only"></div>
                <div class="col l11 m11 s12">
                    <p class="grey-text text-darken-3 lighten-3">C is a high-level and general-purpose programming language that is ideal for developing firmware or portable applications. Originally intended for writing system software, C was developed at Bell Labs by Dennis Ritchie for the Unix Operating System in the early 1970s.</p>
                </div>
            </div>    
        </div>
    </div>

    <div class="parallax-container">
      <div class="parallax"><img src="./img/c/connect2.png" alt="Connect4"></div>
    </div>

    <div class="section">
        <div class="row container">
            <h2 class="header" id="project">Our C Project</h2>
            <div class="row">
                <div class="col l1 hide-on-small-only"></div>
                <div class="col l11 m11 s12">
                    <p class="grey-text text-darken-3 lighten-3">After learning Git/Github and how works Debian WSL (linux environnement on Microsoft), the aim was to create a Connect-4 with some bonus, if it was possible to do them.<br>
                    The bonus are a modifiable table to play on more columns and rows, the detection of the winner and a multiplayer like 6 players at the same time on the same board. This project was a bit hard to realise because understand how works Github was the first difficulty and after the configuration on Debian was even more <br>
                    But it was very enriching.</p>
                </div>
                
          
            </div>
            
        </div>
        <div class="row">
            <div class="col l1 hide-on-small-only"></div>
            <div class="col l3 m4 s12">
                <img class="img-responsive " src="img/c/carouc1.png" alt="Connect4">
            </div>
            <div class="col l2 hide-on-small-only"></div>
            <div class="col l4 m4 s12">
                <img class="img-responsive " src="img/c/carouc2.png" alt="Connect4">
            </div>
            <div class="col l2 hide-on-small-only"></div>
        </div>
    </div> 

  <div class="parallax-container">
    <div class="parallax"><img src="./img/c/connect3.png" alt="Connect4"></div>
  </div>


  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">

          <h5 class="white-text">Contact Us</h5>
          <p class="no-padding grey-text text-lighten-4">If you want to conctact us, please click on the button <span><a class="grey-text text-lighten-4"  target="_blank" rel="nofollow" href="elevator.php">below</a></span>.</p>





           <!-- Modal Trigger -->
            <a class="modal-button waves-effect waves-light btn modal-trigger" href="#modal1">Contact</a>

            <!-- Modal Structure -->
            <div id="modal1" class=" modal modal1 modal-fixed-footer">
                <div class="black modal-content">
                    <h4>Contact Us</h4>
                    <div class="row">
                        <div class="col s12">

                          <div class="row">
                            <div class=" input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" class="white-text validate">
                                <label for="icon_prefix">First Name</label>
                            </div>

                            <div class="input-field col s6">
                              <input id="last_name" type="text" class="white-text validate">
                              <label for="last_name">Last Name</label>
                            </div>
                          </div>
                          
                          <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="icon_prefix" type="email" class="white-text validate">
                                <label for="icon_prefix">Email</label>
                            </div>
                          </div>

                          <div class="row">

                            <div class="col s12">
                              <div class="row">

                                <div class="input-field col s6">

                                    <i class="material-icons prefix">mode_edit</i>
                                    <textarea id="textarea2" class="white-text materialize-textarea"  data-length="250"></textarea>
                                    <label for="textarea2">Textarea</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                            
                    <p class="black-text"><p>
                </div>
                <div class="black modal-footer">
                    <a href="#modal2" class="white-text modal-close waves-effect waves-green btn-flat modal-trigger">Submit</a>
                </div>
            </div>

   

            <!--Second Modal Structure -->
            <div id="modal2" class=" black modal modal2">
              <div class=" white-text modal-content">
                <h4 class="center valign-wrapper">Thanks for your message !</h4>
                
              </div>
              <div class="black white-text modal-footer">
                <a href="#!" class=" white-text modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </div>

        </div>
        <div class="col l4 offset-l2 s12">
            <div class="row">
                <div class="col l4 hide-on-med-and-down"></div>
                <div class="col">
                    <h5 class="white-text">Social Media</h5>
                </div>
                <div class="col l4"></div>
            </div>
          <div class="row">
              <div class="col l4 offset-l2 s12">

                  
                  <h6 class="white-text">Valentin</h6>
                  <ul>
                      <li><a class="grey-text text-lighten-3" rel="nofollow" target="_blank" href="https://twitter.com/fgt_valentin">Twitter</a></li>
                      <li><a class="grey-text text-lighten-3" rel="nofollow" target="_blank" href="https://www.linkedin.com/in/valentin-faguet-11b99b19b">Linkedin</a></li>
                      <li><a class="grey-text text-lighten-3" rel="nofollow" target="_blank" href="https://www.instagram.com/val_fgt/">Instagram</a></li>
                  </ul> 
              </div> 
              <div class="col l4 offset-l2 s12">

                  
                  <h6 class="white-text">Nathanaël</h6>
                  <ul>
                      <li><a class="grey-text text-lighten-3" rel="nofollow" target="_blank" href="https://twitter.com/Gotvna69">Twitter</a></li>
                      <li><a class="grey-text text-lighten-3" rel="nofollow" target="_blank" href="https://www.linkedin.com/in/nathana%C3%ABl-vogt-54622620b/">Linkedin</a></li>
                      <li><a class="grey-text text-lighten-3" rel="nofollow" target="_blank" href="https://www.instagram.com/_natha_69_/?hl=fr">Instagram</a></li>
                  </ul>
              </div>

          </div>

        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2021 <span><a style="color: rgba(255, 255, 255, 0.8);"  target="_blank" rel="nofollow" href="https://www.cultura.com/incitant-porno-9782368776834.php">Yaoi</a></span> Team
      </div>
    </div>
  </footer>
    
  <script src="./js/jQuery.js"></script>
  <script src="./js/materialize.js"></script>
  <script src="./js/script.js"></script>
</body>
</html>