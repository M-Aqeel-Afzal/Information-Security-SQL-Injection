<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Assignment#04 XSS attack</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="shortcut icon" href="#">
    <script src="app.js" defer></script>
  </head>
  <body>
    <section id="user-input">
      <form>
        <div class="form-control">
          <label for="user-message">Your Name</label>
          <input id="name-message" name="user-message" onkeydown="limit(this);" onkeyup="limit(this);"></input>
        </div>
        <div class="form-control">
          <label for="user-message">Your password</label>
          <input type="password" id="passward-message" name="user-message" onkeydown="limit(this);" onkeyup="limit(this);" ></input>
        </div>
        <div class="form-control">
          <label for="user-message">Your Age</label>
          <input  id="age-message" name="user-message" onkeydown="limit(this);" onkeyup="limit(this);" ></input>
        </div>
        <div class="form-control">
            <label for="message-image">Comment</label>
          <textarea id="message-image" name="message-image" rows="4" cols="50">
	        </textarea>
          <!-- <input type="text" id="message-image" name="message-image" /> -->
        </div>
        <button id="submit" type="submit">Send Message</button>
      </form>
      <!-- <script type="text/javascript">
        alert(document.getElementById("name-message"))
      </script> -->
    </section>
    <section id="user-messages">
      <ul id="unordered">

   </ul>
    </section>
  </body>
</html>
<?php
$servername='localhost';
$username='root';
$password='1234';
$dbname='user_records';
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
    die("ERROR: Could not connect".mysql_error());
}
else {
  echo "Connected";
}
if(isset($_POST['submit'])){
    $uname = $_POST['user-message'];
    $password = $_POST['passward-message'];
    $age = $_POST['user-message'];
    $comment = $_POST['message-image'];
    $sql = "INSERT INTO user VALUES ('$uname','$password','$age','$comment')";
    if(mysqli_query($conn, $sql)){
        echo "Inserted record successfully";
    }
    else{
        echo "ERROR: Sorry :".$sql."".mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>
