function Footer() {

    const year = new Date().getFullYear();

    return (
      <div class="container mt-5" id="footer">
        <footer>
                <div class="row">
                    <div class="col-12 text-center">
                        <a href="https://www.facebook.com/profile.php?id=100088444510951" target="_blank" class="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/emerald_swissbmd" target="_blank" class="fa fa-instagram"></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <p>Copyright © { year } emeraldswiss.com - <span class="font-dancing">Where Beauty Meets Boundless Love</span><br /></p>
                    </div>
                </div>
            </footer>
      </div>
    );
  }
  
  export default Footer;