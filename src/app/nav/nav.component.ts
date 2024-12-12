import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isDarkTheme: boolean = false;
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }

  downloadCV() {
    const fileUrl = 'assets/Ahmed_Elswelky Frontend Developer.pdf';
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Ahmed_Elswelky Frontend Developer.pdf';
    anchor.click();
  }
  closeMenu() {
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
}
