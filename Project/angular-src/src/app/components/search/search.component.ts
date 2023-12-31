import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
  ) {}

  posts: string[];
  username: string;
  user: object | null;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const username = params["search"];
      this.getUser(username).subscribe(
        (user) => {
          this.user = user !== null ? user : null;
          this.getPosts(user._id).subscribe(
            (posts) => {
              this.posts = posts;
              console.log(posts);
            },
            (err) => {
              console.log(err);
              return false;
            },
          );
          console.log(this.user);
        },
        (err) => {
          console.log(err);
          this.user = null;
          return false;
        },
      );
    });
  }

  getUser(username: string) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/search/" + username, {
        headers: headers,
      })
      .map((res) => res.json());
  }

  getPosts(userId: String) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log("http://localhost:3000/posts/" + userId);
    return this.http
      .get("http://localhost:3000/posts/" + userId, {
        headers: headers,
      })
      .map((res) => res.json());
  }
}
