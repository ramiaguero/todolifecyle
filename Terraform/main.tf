provider "aws" {
    region = "us-east-1"
}

resource "aws_instance" "backend"{
    ami         = "ami-"
    instance_type = t2.micro"
    tags = {
        name = "backend-instance"
    }
}

resource "aws_instance" "frontend" {
    ami         = "ami-"
    instance_type = "t2.micro"
    tags = {
        name = "frontend-instance"
    }
}