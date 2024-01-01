import { Component, OnInit } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  posts: string[];
  textField: string;
  constructor(
    private http: Http,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts.reverse();
        console.log(posts);
      },
      (err) => {
        console.log(err);
        return false;
      },
    );
  }

  // Getting all existing posts
  getAllPosts() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/posts/", {
        headers: headers,
      })
      .map((res) => res.json());
  }

  // Creating a new post
  onPost() {
    this.authService.getProfile().subscribe((profile) => {
      console.log(profile.user._id, this.textField);
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", localStorage.getItem("id_token"));
      this.http
        .post(
          "http://localhost:3000/posts/",
          {
            content: this.textField,
            owner: profile.user._id,
          },
          { headers: headers },
        )
        .subscribe((res) => {
          this.getAllPosts().subscribe(
            (posts) => {
              this.posts = posts.reverse();
              console.log(posts);
            },
            (err) => {
              console.log(err);
              return false;
            },
          );
        });
    });
  }
}
