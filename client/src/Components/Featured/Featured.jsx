import "./Featured.css";

const Featured = () => {
  return (
    <section id="featured">
      <h5>Problem Solving</h5>
      <h2>Featured</h2>

      <div className="container container__featured">
        <div className="featured__links">
          <div className="featured__link">
            <article className="featured__details">
              <iframe
                src="https://binarysearch.com/@/vkpmail019"
                frameborder="0"
                className="featured__details-link"
              ></iframe>
              <h4>binarysearch.com</h4>
              <small>
                <a href="https://binarysearch.com/@/vkpmail019">Profile Link</a>
              </small>
            </article>
          </div>
          <div className="featured__link">
            <article className="featured__details">
              <iframe
                src="https://leetcode.com/Vipin019/"
                frameborder="0"
                className="featured__details-link"
              ></iframe>
              <h4>Leetcode</h4>
              <small>
                <a href="https://leetcode.com/Vipin019/">Profile Link</a>
              </small>
            </article>
          </div>
          <div className="featured__link">
            <article className="featured__details">
              <iframe
                src="https://auth.geeksforgeeks.org/user/vkpmail019/practice"
                frameborder="0"
                className="featured__details-link"
              ></iframe>
              <h4>geeksforgeeks</h4>
              <small>
                <a href="https://auth.geeksforgeeks.org/user/vkpmail019/practice">
                  Profile Link
                </a>
              </small>
            </article>
          </div>
          <div className="featured__link">
            <article className="featured__details">
              <iframe
                src="https://www.codechef.com/users/vipin_019"
                frameborder="0"
                className="featured__details-link"
              ></iframe>
              <h4>codechef</h4>
              <small>
                <a href="https://www.codechef.com/users/vipin_019">
                  Profile Link
                </a>
              </small>
            </article>
          </div>
          <div className="featured__link">
            <article className="featured__details">
              <iframe
                src="https://codeforces.com/profile/vkpmail019"
                frameborder="0"
                className="featured__details-link"
              ></iframe>
              <h4>codeforces</h4>
              <small>
                <a href="https://codeforces.com/profile/vkpmail019">
                  Profile Link
                </a>
              </small>
            </article>
          </div>
          <div className="featured__link">
            <article className="featured__details">
              <iframe
                src="https://www.hackerrank.com/vkpmail019"
                frameborder="0"
                className="featured__details-link"
              ></iframe>
              <h4>hackerrank</h4>
              <small>
                <a href="https://www.hackerrank.com/vkpmail019">Profile Link</a>
              </small>
            </article>
          </div>
        </div>
      </div>
      {/* <iframe src="https://binarysearch.com/@/vkpmail019" frameborder="0"></iframe>
            <iframe src="https://auth.geeksforgeeks.org/user/vkpmail019/practice" frameborder="0"></iframe>
            <iframe src="https://leetcode.com/Vipin019/" frameborder="0"></iframe>
            <iframe src="https://www.codechef.com/users/vipin_019" frameborder="0"></iframe>
            <iframe src="https://codeforces.com/profile/vkpmail019" frameborder="0"></iframe>
            <iframe src="https://www.hackerrank.com/vkpmail019" frameborder="0"></iframe> */}
    </section>
  );
};

export default Featured;
