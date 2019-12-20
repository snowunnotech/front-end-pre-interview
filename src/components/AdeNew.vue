<template>
    <div class="adeNew container-fluid">
        <div class="header">
            <!-- <a class="back" @click="back">back</a>
 
            <a style="padding: 14px"></a>
            <a class="newDA">edit</a>-->
            <div class="row" style="padding-top: 15px; font-size:18px">
                <div class="col-3" @click="back">back</div>
                <div class="col-6">ADD NEW</div>
                <div class="col-3" @click="saveData">SAVE</div>
            </div>
        </div>
        <div class="row justify-content-center" style="padding-top: 15px;">
            <input type="text" class="form-control col-10" placeholder="Author" v-model="author">
        </div>
        <div class="row justify-content-center" style="padding-top: 15px;">
            <input type="text" class="form-control col-10" placeholder="Created" v-model="created">
        </div>
        <div class="row justify-content-center" style="padding-top: 15px;">
            <textarea class="form-control col-10" rows="5" id="comment" v-model="textarea"></textarea>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    name: "AdeNew",
    data() {
        return {
            datList: "123",
            loadCount: 6,
            author: "",
            created: moment().format("YYYY/MM/DD HH:mm:ss"),
            textarea: ""
        };
    },
    created() {},
    methods: {
        nowDate: function(date) {
            return moment(date).format("YYYY - MM - DD");
        },
        back: function() {
            this.$router.push("/");
        },
        saveData: function() {
            const url = "https://demo.api-platform.com/books" + this.author + "/" + this.created + "/" + this.textarea;
            //    axios
            // .post(url)
            // .then(function(response) {
            //   console.log("新增成功");
            //  this.$router.push("/");
            // })
            // .catch(function(error) {
            //     console.log(error);
            // });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.adeNew {
    height: 100%;
    // background: white;
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
