<template>
    <div class="bookDetail">
        <div class="card">
            <div class="card-body">
                <div class="book-img bg-info">
                    <i class="fa fa-book"></i>
                </div>
                <h5 class="card-title">
                    書名: <br/>
                    {{bookDetail['title']}}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">{{bookDetail['author']}}</h6>
                <p class="card-text">
                    內容: <br/>
                    {{bookDetail['description']}}
                </p>
                <p>
                  發佈時間: <br/>
                  {{publishTime}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'bookDetail',
        computed: {
            bookDetail() {
                return this.$store.state.bookDetail.bookInfo
            },
            publishTime() {
                let x = new Date(this.bookDetail['publicationDate']);
                let y = x.getFullYear().toString();
                let m = (x.getMonth() + 1).toString();
                let d = x.getDate().toString();
                (d.length == 1) && (d = '0' + d);
                (m.length == 1) && (m = '0' + m);
                return `${y}-${m}-${d}`
            }
        }
    }
</script>