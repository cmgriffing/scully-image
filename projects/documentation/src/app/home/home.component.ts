import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  ngOnInit() {}

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  scullyImageLowRes = this.sanitizer.bypassSecurityTrustUrl(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAgCAMAAABThhoPAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURQEBAUEbDzAQC2s8JQ0HB5iapPns8vLj6PPl6u/g5RwLCVUgD4hNJ1swHu6qk/O2pkcmF9GLbvzQyZhZN7NoQZCSmuWcf+TW28d5TXtGKB4dHd7JypSLhsu8vvnEtf/4+n6Chc+qnEVBQH1YQoVoWjEvLGpoaHIxFr6bjrKoqq56Y6RQKl5TUAvh25IAAAJHSURBVDjLfZSJsqIwEEWzyUsIIQSQfRMQVOb/v286PGUUqemqYCUcbm6606Kf/4QQAsZrhp6L22PDAOIO/+H8BaO3d++cBXl5r9OyhAn/RHd7A2gibxjUcOPin6p4e/wuCyc1yywxDjAJLo6wcawqnDL2MGMMMZe5QSXAAkefDl+7l3Es0TMYI+O9rku0O/76w9NHtjCEsJIBdoF1x9PpdGzglmUKoVz7xsTUBWW1R9dDga/ykcUYET/UfpJ5AaC4OlQV/OZFC0ZS/6IUrJDxEOVlriScX/qNRSMPHLjDhor3RF0wdqkk8yXU2s88j0AW6Lcq2HVqRRiWklLjJxFWOQYDQXVgQDg3TAiBQrm5NrK/UjiXq56oeBvWgARUymiIQkNNZFVdeqxaU4oZnv3MhCaPTQReyfDhVWzHkgEpVARkmHh5bDMQrHn9uFFrpCOlVMVJoxuT52teoVrnoxI4l0W5zDR6VfWgxOjP6XzeFfYpG2GCHk3jm3jOI0gA6/bo6wNeKuIGWifxInMPLm1/PltUfLWhsEmY50iDbOQFzL12XfeuKl79DI2apve6pAlYiD01VlNx7afuq7DccdLTFU1t+9BNksWLqu6T7YUCfTVV10Mei9Rpx0fY+Il53E9VsXbOjjwzq4Cqlrc3CRfLz0JRp9MXCqTlYKStU9cq9+HCVl3a3veo4OnvTqjn3RUVo4yb8MJQMdXFHrWiaxT2FevzRYeT3YaxL/QP2prffjDMSXjdlhD81UFAR8FwevQRvcwubJv9BXt8OG8H1C5zAAAAAElFTkSuQmCC'
  );

  scullyImagePrimitives = this.sanitizer.bypassSecurityTrustUrl(
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9Ijc2OCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0iI2FlOWE5OCIgZD0iTTAgMGgxMDI0djc2OEgweiIvPjxwYXRoIGQ9Ik05MDEgMzFsMTM5IDc1My0zMzYtMjk3ek00MzYgNTc4bDQ2MyAxOTMtNjEzLTR6Ii8+PHBhdGggZmlsbD0iIzI5MDAwMCIgZD0iTTk4MiAxNTlMNDQ4IDQ5NSA2MjMgNjF6Ii8+PHBhdGggZD0iTTEwNDAgNzU5bC0yNTYgMjEgMTEtMTQ2eiIvPjxwYXRoIGZpbGw9IiNmZmYyY2IiIGQ9Ik04NjEgMjk1bC0yMTAgMjIgMjYtMTQ3eiIvPjxwYXRoIGZpbGw9IiNmZmY5ZGEiIGQ9Ik04MjYgNjA2bC02NyAxNzgtNDEtODF6Ii8+PHBhdGggZD0iTTQzNSA3ODRMMzIxIDY1OWwyNzYtMTA3eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01OTcgNTMwbDU1IDEyMy0xMzcgNDZ6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTU5MiA1NDRMLTE1IDc4MiAxNC0xNXptMjAyIDEwN2wxMzAgMjgtNDUtMTM5eiIvPjxwYXRoIGZpbGw9IiMxNzAwMDAiIGQ9Ik02MjcgNTQ2bDMyIDExOSA3MyA1NXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNzQ1LTE1TC0xNS0xbDI2IDc4M3oiLz48cGF0aCBmaWxsPSIjZmZlNWNhIiBkPSJNNzYwIDQ4NWwtMTQ2IDE1IDExNi0xNzJ6Ii8+PHBhdGggZD0iTTc2MyA3NzRsMjc3LTctOC0yMjR6Ii8+PHBhdGggZmlsbD0iIzE4MDAwMCIgZD0iTTU3OCA2MDNMNzE5IDUzIDQ2MyAzMDl6Ii8+PHBhdGggZmlsbD0iIzIwMCIgZD0iTTUyNyAzNjBsMTQxIDIxMC0xNDgtNTN6Ii8+PHBhdGggZD0iTTc5NCAyNjVsMTg4LTkxLTg2IDQ1NHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMgNzY3bDI4OSAxMiAyMDgtNTUzem01OTItMjM4bDQ4IDEzMy0xMzAgMTN6Ii8+PHBhdGggZmlsbD0iI2ZmZDBiYSIgZD0iTTgxNyAxOTZMNjQ3IDMyMGwxOS0xMjd6Ii8+PHBhdGggZmlsbD0iI2MzNTMxNiIgZD0iTTc5NyA2ODdsLTk2LTE4OSAxNjQtMjM2eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMDQwLTFMNjg2LTE1bDMxOSAyMzJ6Ii8+PHBhdGggZD0iTTcwNSA3NzFsLTcyLTExMi0zMjggMTA5ek04MjkgNThsMTY1IDI5OS0zNTUtMjM5eiIvPjxwYXRoIGZpbGw9IiNjZjVhMGEiIGQ9Ik00ODggMjMwbDg3IDYzIDQ3LTIxMHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOTI4IDY5OGwtMzEtOTctMzggNjV6Ii8+PHBhdGggZD0iTTU2NiA1NjRMMzEwIDcwNmwxODIgNzh6Ii8+PHBhdGggZmlsbD0iI2NmN2Q1MiIgZD0iTTY1NCAyODZsMTk2IDE2NiA0LTcxeiIvPjxwYXRoIGZpbGw9IiM5Y2E0YTYiIGQ9Ik04MzAgNjQ1bDMtODIgMTc5LTEwNnoiLz48cGF0aCBmaWxsPSIjZmZmOWZmIiBkPSJNMTA0MC02djE1MEw0OTktMnoiLz48cGF0aCBmaWxsPSIjNDAwNzAwIiBkPSJNNjA5IDE5OGw5OCAxODEtMTY0LTEyeiIvPjxwYXRoIGZpbGw9IiNmZmY2ZmYiIGQ9Ik0tMTUgMmwzNjggMzAzTDc2NS0xNXoiLz48cGF0aCBkPSJNMzA1IDc4NGw3NS0xNTggMzgxIDE1OHoiLz48cGF0aCBmaWxsPSIjZmZmZmZkIiBkPSJNNjQ1IDY1OGwzMyA1MS0xNC00OHoiLz48cGF0aCBmaWxsPSIjMGIwMDAwIiBkPSJNODE0IDYwOGwxMTMtMjA0LTE2NCAxNjd6Ii8+PHBhdGggZmlsbD0iI2ZmZmFmMCIgZD0iTTcwMiA3ODRsLTE0LTQ3IDE0IDE2eiIvPjxwYXRoIGZpbGw9IiNmZmY0ZmUiIGQ9Ik01ODMgNTU4TDQxMCA0MTBsLTY2IDIyNXoiLz48cGF0aCBmaWxsPSIjZTA3YTNiIiBkPSJNNjk5IDE3OWwxNjcgMTkwLTQyLTE3OHoiLz48cGF0aCBkPSJNOTU5IDc4NGw4MS0xOTEtMTU1LTQ5eiIvPjxwYXRoIGZpbGw9IiM4ODk4YTUiIGQ9Ik0xMDE5IDM4Mkw5MTkgMTUwbDEyMSAxMXoiLz48cGF0aCBmaWxsPSIjZmZmNmYyIiBkPSJNNjQ1IDYxMGwtMTAzLTYzIDg3IDN6Ii8+PHBhdGggZmlsbD0iI2ZmZjRmZiIgZD0iTTM1OCA1ODlsLTQ5IDE5NUgtM3oiLz48cGF0aCBkPSJNODU4IDU1N2wxMjItMjAzLTEyMS0xMjB6bS00MSA5NGwyMjMgOTYtMjc4IDM3eiIvPjxwYXRoIGZpbGw9IiM1ZDE5MDAiIGQ9Ik01MzIgMTg3bC02MSAxMDQgNDggMjEzeiIvPjxwYXRoIGZpbGw9IiM4ZTQwMDYiIGQ9Ik01NDAgMTYwbDE0MC05NCAxNzEtMnoiLz48cGF0aCBmaWxsPSIjM2YwYTAwIiBkPSJNNjI4IDQzNmwtNjYgMTEyLTY3LTg0eiIvPjxwYXRoIGZpbGw9IiM2ZTM2MTciIGQ9Ik00ODQgNDI0bDY2LTI1LTc5LTUzeiIvPjxwYXRoIGQ9Ik04MDMgNzgxbDU5LTExMS04MSAzNnoiLz48cGF0aCBmaWxsPSIjYTY1NDI5IiBkPSJNNjIwIDMxN2wxMyA5OSAyNi0xOTF6Ii8+PHBhdGggZmlsbD0iI2FlMmIwMCIgZD0iTTcwMSAzMjlsLTg2IDEyNSA3OS02M3oiLz48cGF0aCBmaWxsPSIjZmZjM2IzIiBkPSJNODMwIDQxNGwtNTEtNzMtNCAzNHoiLz48cGF0aCBmaWxsPSIjZjZlM2U5IiBkPSJNOTUyLTE1SDQ3Mkw2MTUgOTR6Ii8+PHBhdGggZmlsbD0iI2ZmYjk5NCIgZD0iTTc1NCA3ODRMNTk0IDQzMWwyMDYgMTU0eiIvPjxwYXRoIGQ9Ik01ODYgNTYybC01MyA3OS0yMS02NHptMjgxLTQ1Nkw1ODIgMjM3bDUxLTEyMXoiLz48cGF0aCBmaWxsPSIjYjAxMjBlIiBkPSJNNjg0IDUwNWwyNi0xOSA4MCAzNXoiLz48cGF0aCBmaWxsPSIjZmJlNmVmIiBkPSJNNDgzIDEzMmwtMTAgMzQyLTMzNy02MXoiLz48cGF0aCBkPSJNMzI3IDY5NmwxOTgtMTExLTEzNSAzMnoiLz48cGF0aCBmaWxsPSIjMDQwMDAwIiBkPSJNODMzIDc0bDEwNSAxMzktMzEzLTU2eiIvPjwvc3ZnPg=='
  );

  scullyImageTraced = this.sanitizer.bypassSecurityTrustUrl(
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9Ijc2OCIgdmlld0JveD0iMCAwIDEwMjQgNzY4IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNNzEzIDU3Yy0xIDEgMCAxIDIgMWwzLTEtMi0xLTMgMW0tNSAzbC0xIDJjMCAzLTIgMy0xMiAzLTggMC05IDAtMTMgM2wtNSA1LTcgMy03IDMtNSAzLTUgMi0yIDFhMTE4IDExOCAwIDAwLTM2IDE4bC0xMiA3Yy00IDItNiAzLTUgNGwtNSA1LTYgNS0xIDFjLTItMS0yIDAtMiAybC0xIDJjLTItMi04IDQtMjcgMjNhOTIgOTIgMCAwMC0xNyAyMSA4OSA4OSAwIDAwLTkgMTNjLTIgMS03IDEwLTcgMTJsLTIgMy0xMCAyMWMtNCAxMy0xNCAyOS0yMCAzNWwtMSAyIDItMSAyLTEgNC0zYzMtNSA2LTYgNC0xLTMgNC01IDYtNyA2LTEgMS01IDktNSAxMyAwIDMtMiA1LTMgNWwtMS0yLTEtM2MtMSAwLTItMS0yLTMgMC0xIDAtMi0xLTEtMiAwLTIgMi0yIDZsLTEgNXY2YzAgNi0xIDExLTQgMTF2MTBsMSA0YzIgMyAzIDUgMyAxNnYxNmwxIDMtMi0xLTQtNWMtMi0zLTItMy0yLTF2MTFjMSAyIDIgOCAxIDEwLTEgNCAwIDEyIDMgMTYgMiAyIDIgNCAyIDZ2MWMyLTEgNCA0IDMgNmwtNyAxN3YzbDQtM2M0LTQgOC01IDgtMSAwIDEtMSAyLTMgMi0zIDAtNyAzLTggNXMtMSAzLTQgMmwtMyAxIDIgMmMyIDAgMyAxIDMgNGwzIDRjMiAwIDMgMiAzIDVsNCAxaDN2NWMwIDQgMCA1IDIgNmwyIDJjMCAxIDEgMiAzIDJsMiAxLTIgMWMtMyAwLTQgMC00IDJsMSAxIDEgMiAyIDEgMyAzYzEgMyAzIDQgMyAxIDAtMiAyIDAgMiA0djRsMSAzIDIgMiAxLTRjMS00IDEtNCAxLTEgMCA1IDMgMTggNCAxOGwzIDUgNyAxMCA1IDZjLTEgMiAwIDIgNSA4bDMgMiA1IDdjNiA4IDE0IDE3IDE5IDIwbDE1IDcgOCAxIDEwIDFoNmMxLTIgMjItMiAyMiAwIDAgMSAxIDIgNCAyIDcgMiA5IDUgMTIgMTZsMyAxMSA0IDIxYTI1NCAyNTQgMCAwMDMxIDkwbDIgNiA1IDEyYTUyMCA1MjAgMCAwMDIwIDQ3bDMgMTAgMSAzaDIxYzE5IDAgMjAgMCAyMC0yYTMwMyAzMDMgMCAwMS02LTE3bC0yLTctMy04LTYtMThjLTQtMTItNS0xNy0yLTE5di04bC0xLTNjLTMtNi0xMi0xOC0xNS0xOHMtMjktMzEtMzktNDhjLTEwLTE2LTI1LTQ2LTI3LTU0IDAtMyAyLTQgNC0ybDMgM2MzIDEgMTEgMCAxNy00aDJsMS0xLTItMy04LThjLTIyLTIwLTM1LTM3LTQ0LTU0LTgtMTUtOS0yMS02LTI2bDUtMTFjMi03IDItOCAxMC0xNWwxMy0xMCA5LTYgNS0zIDUtMyA1LTRjMiAwIDgtNSA4LTdsNS00IDgtOCA2LTdjMSAwIDUtNiA1LTEwbDMtNiA0LTcgMy00LTMtMmMtMi0xLTMtNC0xLTRsMS0zIDEtNmMyLTIgMi00IDEtNWwtMS00LTItNGMtMi0zLTItMy0xLTV2LTFsLTEtMmgyYzMgMCAzIDAgMi0yLTItNy03LTEwLTIzLTEzLTE2LTItMTktNy0xOS0yNCAwLTgtMi0yNi00LTMzLTItOSAwLTI5IDQtMzhhODggODggMCAwMTIwLTI3bDUtMiAyLTJjMC0xIDctNCA4LTNoNGMwIDIgMCAyIDEgMSAyLTIgNS0zIDUtMWwtMSAxLTIgMWMwIDIgMyAxIDUtMWg2bDYgMWg2bC00IDJjLTUgMS03IDMtMyAyIDEtMSAyIDAgMyAxbDUgMWEyMjcgMjI3IDAgMDEzOCAybDE5LTEtMSAxYy0yIDEtMSA0IDEgNGwxLTF2LTJjMS0xIDEtMSAxIDFsMSAzdjRjLTEgMyAwIDYgMSA2djFjLTIgMS0zIDQtMSA0IDEgMCAwIDE0LTIgMTctMSAzLTEgMyAxIDVsMSA1djE0bDEgMSAxIDRhMTkwNTUgMTkwNTUgMCAwMC0xIDE3Yy0xIDMtMSA1IDEgNnYzYzAgMiAwIDIgMiAyczQgMiA0IDVsLTEgNC0yIDJjMCAyIDAgMi0yIDJoLTJjMCAzLTcgOC0xMiA5bC02IDJoLTFjLTMgMC0xNyA3LTE3IDEwbC0zIDQtMyAzLTEgNGMtMiAzLTIgNC0yIDIwYTIyOTIgMjI5MiAwIDAxNCA2MmwxIDE2Yy0xIDExLTEgMTEtNyAxNy02IDctNiA4IDQgMTJsOSAzdjZjLTEgMTAtMSAxMC0zIDEwbC0yIDEtMyAxLTIgMWMwIDEtNiAzLTggMi0zLTEtMy0xLTQgMWgtMnYtMmwtMS0xLTIgMWgtMmwtNS0yYy0yIDAtMyAwLTIgMWwxIDItMi0xLTMgMS0zIDFoNWMwIDEtMiAyLTYgMWwtNCAxLTUgMy01IDMtMiAxYy0xIDAtNiAzLTYgNWwtMSAxLTEgMiAyIDEgNCAyaDJjMC0xIDUtMSAxMCAxbDYgMiA0IDEgNSAxYzMgMCA1IDIgNCA0bDEgMSAxLTJjMC0zIDItMyAzIDBsMSAxYzAtMiAyLTMgMyAwbDEtMWMxLTMgMy0xIDMgMi0xIDItOCAzLTEzIDJsLTQtMS00IDFjLTMgMS0zIDEtMiAzdjJsLTEtMS0xLTEtMi0xaC0xbC0xIDFjMyAzIDkgNiAxMCA2bDEgMWMwIDIgOSA0IDI2IDdhNjAwMyA2MDAzIDAgMDExOSA1YzAgMiAxIDMgMiAzIDMgMSAyIDUtMSAxMmwtMSA0LTEgMy0yIDJ2LTJjMC0yIDAtMi0yIDEtMiA0LTIgNCAwIDRoMWwtMSAxLTIgMS0xMSA5LTMgMS01IDEtMiAxLTQgMi03IDItOSAxLTUtMSAzIDIgMjMgMmMxOCAwIDI1IDAgMjIgMnY0YzEgMSA1IDAgOC0yIDctNCAxMC00IDE4LTFzMTAgNCAxMCA3bDIgNGMyIDIgMiAxMCAwIDEybC0xIDUtMiAzdjNsLTEgMS0zIDdjLTIgNC0zIDUtMiA2djNsLTEgMy0yIDNjLTEgMi0yIDMtMSA1bC0xIDMtMiAyYzAgMSA0IDAgNy0ybDMtMSA0LTMgNC0yYzIgMSA5LTE4IDEyLTM0IDMtMTQgNi0yMCA3LTE2bDIgMiAxIDFoNmMzLTEgMy0yIDMtNnYtN2wxLTNjMi0xIDItMiAyLThsMi00IDItMTBhNDA0IDQwNCAwIDAxMi0xMGMwLTIgNy00IDEwLTRsNSA1IDMgM2MzIDAgMyAxIDEgMmwtMSA0YzEgMiAxMS03IDExLTEwbDItMWgxYzAtMiA1LTUgNi00bDItMWMxLTIgNiAxIDcgNWwzIDV2NWwtMS0yYy0xLTItMy0zLTMtMSAwIDMgMSA1IDIgNGwxIDJjLTIgMy0zIDgtMyAxNWwtMSA5LTEgMiAxIDJjMy0xIDUgMiA1IDggMSA1IDIgNiA0IDggMyAyIDUgMyA1IDFsMS0xIDEgMSAxIDFjMSAxIDIgMCAyLTEgMC01IDggMTQgMTAgMjVsNSAxOGMxMCAzNCAxMSAzNSA3IDM3LTMgMi01IDEtMTMtNGE5MyA5MyAwIDAwLTIzLTEwbC0xMy02YTQwOCA0MDggMCAwMS00Ny0yMGMtNC0yLTQtMi02LTFsLTUgM2MtNSAyLTEyIDgtMTMgMTFsLTMgNmMtMiAyLTMgNC0yIDVsLTEgMi0zIDgtMyA2LTEgMy0yIDVjLTMgNi0xNyA1OC0xNyA2NHYyaDI1M1Y2NjdhMjg0NiAyODQ2IDAgMDAtMy0xMDlsLTItM2MtMSAzLTQgNS02IDQtMy0zLTYtNi03LTktMS0yLTItMi01LTJsLTQtMS0yLTJjLTItMS0yLTEgMC0xIDMgMCAzLTMgMC0zLTItMS0zIDAtMyAxbC0xIDJ2LTJjMC0xLTEtMi01LTJsLTYtMmgtMmMtMSAyLTExIDItMTEgMGwyLTJjMS0xIDEtMS0xLTJzLTYgMC02IDFsMiAxYzEgMCAyIDEgMSAyaC02bC0zLTEgMi0xYzItMSAxLTEtNC0xLTYgMC03IDAtOC0yLTItMS0yLTEtMiAxbC0yIDItMi0xYzEtMi0zLTMtOC0zbC00LTJjMC0zLTMtMS0zIDJsLTEgMi0xLTEtMS0xLTIgMWMwIDItMiAxLTQtMmwtNS0yYy0zIDAtNSAwLTQtMWwxLTEgMi0xdi0yYy0yIDAtMS0yIDQtOGw2LTkgMS0zIDEtMiAzLTYgNS03YzEtNyAyLTkgMy04IDEgMCAyIDAgMS0ybDEtMiAxLTQgMi03IDMtMTFjMS0xMCAyLTEzIDQtMTZhMTcxIDE3MSAwIDAwOS0yM2wzLTMgMy01IDMtNSAxLTMgMS0zIDItMyAzLTcgNi0xNCAxLTkgMS0xMyAxLTljMyAxIDMgMjEgMSAyOWwtMSA2YzEgMCAzLTMgMy02bDEtM2MyLTIgMy0xMCAyLTE4YTE2NyAxNjcgMCAwMC0xMi00N2wtMi03Yy0yLTMtNC0xMi01LTIxbC0xLTExLTItNi0xLTQtMS0zLTMtN2MtMy04LTQtMTMtMy0xM2wxLTItMS0yLTEtNC0yLTVjLTEtMS0xLTEtMSAxIDIgMyAyIDUgMSA1cy0yLTMtMi03bC0xLTZ2LTVoLTFjLTIgMi00LTItNC04bC0yLTctMy04LTMtOHYtMmwtMS0yLTItNC01LTZjLTItMS0zLTQtMS00IDEtMSAwLTItMi00LTMtMy01LTQtOC00bC01LTFoLTNjLTIgMC0zLTEtNS0zcy0yLTIgMC0yaDJjMC0xLTMtMi00LTFsLTUtMy0xMC05LTktOS0xNS0xMmMtMTItOS0xNi0xMy0xNC0xNCAxLTEgMS0xLTEtMmwtNC01YTIzNCAyMzQgMCAwMC0xOC0yMWMtOS00LTE3LTQtMjMgMC0yIDEtNCAyLTUgMWwxLTFjMiAwIDEtMi0xLTJsLTUtMmMtNS0zLTEyLTEtMjEgNS01IDMtNiA0LTcgM2gtMmMtMiAyLTQgMS00LTFoLTFjLTEgMi0yIDItMyAyaC0ybC0xIDNjLTIgMS0yIDEtMi0ybC0xLTRjLTItMS0yLTEtMSAzbDIgNXYxYy0yIDEtNi01LTYtOXMtMTAtMTEtMTItOGgtN2wtNC0xaC0xM20xMCAyaC0zYy0yIDAtNCAxLTQgMyAyIDIgMTAgMCAxMC0yLTEtMi0zLTItMy0xbTY2IDVjLTUgNSAxIDkgOCA2IDUtMiA1LTQgMC03LTQtMy01LTItOCAxbS05NyAxYy0yIDAtMyAyIDAgMmgzYzIgMSA1LTEgNC0xLTEtMS01LTItNy0xbTEyNCAxYy05IDItNiA0IDYgNCA2IDAgNyAwIDkgMiA0IDMgNSAyIDItMWwtMTEtNi02IDFtLTczIDJsMiA0aDFsLTEtMXYtMWMzIDAgMi0xIDAtMy0yLTEtMi0xLTIgMW0tMTEgM2w0IDV2LTNjLTItMy00LTQtNC0ybTg5IDFjLTQgMS00IDIgMCAzbDMgMWgtOGwtNy0xYy0xIDEgNiA1IDggNWw1IDIgNyAzIDcgMmM0IDEgNC0yIDAtNC00LTEtNC0yLTQtNiAwLTMtNi02LTExLTVtNDAgMzRjMCAyIDEzIDE0IDE2IDE1IDYgMiA2IDEtMS01LTgtOC0xNS0xMi0xNS0xMG0tMjUzIDEzbC00IDQtMyAzLTIgMiAxNC0xMS01IDJtMTIgMWwtMyAxLTEgMWMtMiAyIDMgMiA2IDAgNC00IDItNS0yLTJtLTEyIDlsLTQgNGMtMSAwLTMgMS0zIDNsLTMgMmMtMyAwLTYgMy01IDVsLTEgMi0xIDJjMCAyLTEgMy0zIDJoLTFjMCAyLTIgNC04IDlsLTIgMS00IDUgNC0yYzQtMyA1LTIgMSAyLTIgMi00IDUtMyA2bC0yIDEtNSA0Yy00IDQtNSA0LTEtMSAzLTUgNC04IDEtNGwtNCAyYzAtMiA1LTYgNi01aDJ2LTNjLTEtMi0xLTMgMS01IDMtMyA0LTQgNC0yaDF2LTdsMSAyYzAgMyAyIDMgNCAwczItMyAxLTR2LTRsNS03IDUtNy0xMiAxMGE1NTc0IDU1NzQgMCAwMS0xOSAyMyAzNjEgMzYxIDAgMDAtMjkgNDNsLTEgMy0xIDItMiA0Yy01IDQtNiA2LTQgN2wtMSAyYy0xIDEtMiAyLTEgM2gybDItMiAxLTEgMy0zIDItMyAyLTUgMi02IDEtMiAxIDIgMSAydi0yYzMtNyAzLTggNS05aDN2LTFsMS0xaDFjMS0xIDEgMCAxIDFsLTIgNS0yIDMgNC0yYzMtNSA0LTMgMSAxbC0yIDQtMiA1LTMgNC0xIDEtMSAxaDNjMy0xIDMtMSAwIDNsLTIgMmgtMmMtMiAxLTMgMyAwIDMgMSAwIDEgMy0xIDZsLTEgM3YtNGMxLTQgMC00LTEgMHY4Yy0yIDUtNCAxMy0yIDEzbDItNGMwLTQgMS00IDMtNCAxIDAgMi0xIDItNHM0LTggNi04bDEtMSAyLTMgMS0zYzAtMiAwLTIgMi0xIDEgMiAxIDIgMSAwczQtMTYgNi0xOWwxLTQgMi02IDItNiA1LTEwYTc0IDc0IDAgMDA2LTE0bDE0LTE5IDctNyAxLTFjMC0xIDEtMyAzLTNsNC00IDMtM3YtMWMwLTMtMS0yLTQgMW0tMSAxOXY3bDQtNmMwLTItMy0zLTQtMW0zMTUgNGMzIDIgMyAyIDQgMSAxLTItMi00LTQtNHMtMiAwIDAgM20tNC0xbDIgNGMyIDMgMyAyIDEtMi0yLTMtMy00LTMtMm0tMzI0IDNjLTQgNS00IDYgMSAybDMtNGMwLTItMi0xLTQgMm00IDVjLTYgMTAtNyAxMi04IDE3bC0yIDhjLTQgMy03IDExLTcgMTcgMCA0LTIgOS0yIDQgMC0zLTQgNi00IDEwIDAgMiAwIDIgMiAxIDEtMyAyLTEgMCAyaC0yYy0xLTEtMS0xLTEgMWwxIDIgMSA1LTIgOXY0bDItNCAyLTEwYzEtMTAgMi00IDEgOGExMjggMTI4IDAgMDA2IDUzbDEgNC0xLTYtMS05YTIyMCAyMjAgMCAwMTgtOTRsLTEtMSAyLTZjMC01IDMtOCA1LThzMiAwIDAgMmwtMyA0YzEgMyAzIDQgMyAxIDEtNCAzLTQgMyAwLTEgNSAxIDQgNC0yIDItNiAyLTggMC02LTQgMi03IDAtNS00czEtNi0yLTJtMzQxIDFsNSA2YzIgMCAxLTMgMC00bC0yLTItMS0xLTIgMW0tMTAgNWwyIDJjMiAxIDMgMiA0IDYgMCA2IDIgOCA0IDUgMS0zLTEtOC02LTEyLTMtMi00LTItNC0xbS0zNjggMTBsLTIgMy0xIDFoLTFjMCAzLTEgNC01IDlsLTQgNmMwIDIgMSAxIDMtMiA3LTggOS0xMSAxMC05bDMgMWMyIDAgMiAwIDAtMmwtMy0xYy0yIDAtMS0xIDEtNCAzLTQgMi01LTEtMm04IDJsLTIgNGMwIDEgNC0yIDQtNGwxLTEgMS0yLTQgM20zNzAgM2MwIDIgNCA5IDUgN2wtMi01LTMtMm0tMzY2IDZ2NmwyLTctMiAxbTE0IDBjLTEgMi0zIDE0LTEgMTQgMSAxIDEgMCAxLTNsMS01IDEtNGMwLTMtMS0zLTItMm0tNDMgMjF2MmMyIDAgNC0yIDQtMy0xLTItMy0xLTQgMW0tMTggMjJ2NGwxLTIgMS0zYzItMyAwLTItMiAxbTQxIDQ2Yy0xIDEgMyAyOCA0IDMxIDEgMiAxLTMtMS0xN2wtMS0xM2MwLTItMi0zLTItMW02OSA0OGwtMSA5IDMgMSAxLTJ2LTJjMiAxIDIgMCAyLTNzMC01LTItNWMtMi0xLTMtMS0zIDJtOCAyYy0xIDIgMCAzIDIgM3YtNGMtMS0xLTIgMC0yIDFtMTQwIDE2Yy0yIDMtMiA1LTIgOCAxIDUgMSA1LTIgNXMtMyAyLTEgNmw1IDEwIDYgMTFhMTQwODEgMTQwODEgMCAwMTE4IDI0bDMgM2MxLTEgMSAwIDIgMSAxIDMgNCA0IDYgMWwxLTQgMS0xYzEgMCAyIDEgMSAyIDAgMyAxIDMgMyAwIDEtNCAyLTcgMS05LTEtMSAwLTIgMS00bDEtMmgtMmMtMi0xLTItMSAwLTQgMC0zLTMtMy01IDBoLTJsMi01IDIgMWMyIDAgMS0yLTEtMmwtMi00YzAtMi0xLTMtNC00bC02LTUtNC0yYy0xIDEtNCAwLTQtMWgybDEtMWMwLTItMi0yLTQtMnYtMmgtMmMtMSAyLTIgMi0yIDFsLTItMmgtM2wtMi0xLTItMWgtMWw0LTJoN2M0IDEgMTAgMCAxMi0zczItNC0xLTJjLTUgNS0xNSAyLTE5LTVsLTItNmMwLTMtMi0yLTQgMW0tMTA0IDExbC0yIDQgNC0zIDEtMmMxLTItMS0yLTMgMW0tMjUgMmwxIDQgMSAyYy0xIDIgMyA0IDQgMmwyLTJjMi0xIDItMS0xLTNhMzQgMzQgMCAwMS02LTRsLTItMiAxIDNtLTE3IDdsLTEgNS0xIDVjMiAwIDQtOCAzLTExLTEtMS0xLTEtMSAxbTE2IDdsLTEgMy01IDktOSAxNWMtNyAxMS0xNyAzOC0xNCA0MiAwIDEgNC0xIDYtNSAyLTUgMTAtMTQgMjYtMjlsNi04IDMtNCA0LThjMi01IDItNSAwLTZsLTUtOGMtMS0yLTEtMi0zLTFoLTJjLTEtMy02LTMtNiAwbS0xMiA2bC00IDYtMiA0YzAgMiAwIDIgMiAwIDYtOCA3LTkgNy0xMi0xLTItMS0yLTMgMm0tOSAxbC0xIDEwYzEtMiA1LTExIDQtMTItMS0yLTItMS0zIDJtLTEzOCAxYzAgMSA4IDcgOSA2bDIgMiAyIDF2LTJsLTQtMi00LTJjLTItMy01LTQtNS0zbTE0MyAxNGMtMyAyLTUgNS01IDZsLTEgMS0xIDNjMCAxIDAgMiAxIDEgMC0yIDUtOCA4LTExbDItNC00IDRtLTk5IDVjMCAxIDQgMiA3IDF2LTFsLTUtMS0yIDFtLTU5IDIxbDIgM2MxIDAgMiAwIDItMyAxLTIgMS0yLTEtMnMtMyAxLTMgMm0xMjggMTVsLTQgNCAzIDExYzMgMTMgMyAxNSA0IDEwIDItOSAzLTE1IDItMjJ2LTdsLTUgNG0tNDIgNHYybDIgMXYxbDEtMSAxLTJjMC0yLTEtMi00LTFtMTUwIDZjMCAxIDUgMyA2IDJsLTEtMmgtNW0tMjE1IDNoOGMzLTEgMi0xLTUtMS0yLTEtMyAwLTMgMW0yOSAzbDYgMmMxLTEgMC0yLTMtM2wtMyAxbS0xMCAzbDEgNyAyIDYgMSA2IDEtNmMwLTggMC0xMC0yLTEzLTMtNC0zLTQtMyAwbS01IDNsMyA5YzIgMCAxLTQtMS03bC0yLTJtMjEwIDQ1YzAgMSA3IDIgMTAgMSAyLTEgMi0xLTEtMWwtNy0xLTIgMW0xOTMgMjBjLTIgMy0yIDUgMSAzbDItNi0zIDNtLTMyNSAzNWwtMjEgMTMtMi0xYy0yLTMtNi0yLTExIDEtNCAzLTEwIDctMTIgN2wtMi0zYy0yLTQtMTAtNi0xMS0yIDAgMi0xIDMtMyAxLTItMy0xNyA1LTE3IDEwIDAgMy0xMCA3LTM4IDE0LTM0IDktNDEgMTAtNTAgMTQtNTIgMTgtODUgNTQtOTcgMTA5LTMgMTQtNiAzNC02IDQzdjZoMTkxbDE5MS0xYTYzNzUgNjM3NSAwIDAwLTUxLTk2IDQzOCA0MzggMCAwMC0xNy04Yy0yLTMtMi0zLTI2IDQtMjggOS00MyAxNi02MyAyNy0xNCA4LTE5IDgtMTgtMWwxMS00NmMzLTkgOS0yMCAxOS0zNmwxMi0yMSAyMi0zMWMzLTQgMi03LTEtMyIgZmlsbD0iIzNBQTg2MCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'
  );
}
