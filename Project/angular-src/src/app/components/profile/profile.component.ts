import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  user: Object;
  posts: string[];
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: Http,
  ) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (profile) => {
        this.user = profile.user;
        this.getPosts(profile.user._id).subscribe(
          (posts) => {
            this.posts = posts;
            console.log(posts);
          },
          (err) => {
            console.log(err);
            return false;
          },
        );
      },
      (err) => {
        console.log(err);
        return false;
      },
    );
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
