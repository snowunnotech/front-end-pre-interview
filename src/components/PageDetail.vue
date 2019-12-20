<template>
    <div class="pageDetail container-fluid">
        <div class="header">
            <!-- <a class="back" @click="back">back</a>
 
            <a style="padding: 14px"></a>
            <a class="newDA">edit</a>-->
            <div class="row" style="padding-top: 15px; font-size:18px">
                <div class="col-3" @click="back">back</div>
                <div class="col-6">{{datList["title"]}}</div>
                <div class="col-3">edit</div>
            </div>
        </div>
        <div class="row" style="padding-top: 15px;">
            <div class="col-6 text-left c1">Author:{{datList["author"]}}</div>
            <div class="col-6 text-right c1">{{nowDate(datList["publicationDate"])}}</div>
        </div>
        <div class="row" style="padding-top: 15px;">
            <div class="col text-left">Author:{{datList["description"]}}</div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    name: "PageDetail",
    data() {
        return {
            datList: "123",
            loadCount: 6
        };
    },
    created() {
        this.datList = this.$route.params.data;
        console.log(this.$route.params.data);
    },
    methods: {
        nowDate: function(date) {
            return moment(date).format("YYYY - MM - DD");
        },
        back: function() {
            this.$router.push("/");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.pageDetail {
    height: 100%;
    background: white;
    .header {
        width: 100%;
        top: 0;
        left: 0;
        position: fixed;
        font-weight: bold;
        z-index: 50;
        height: 8vh;
        background: orange;
        color: white;
        .newDA {
            float: right;
            padding: 14px;
        }
        .back {
            float: left;
            padding: 14px;
        }
    }

    .c1 {
        color: #999;
    }
    .card-text {
        color: #999;
        font-size: 15px;
    }
}
</style>
